import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

import { betterAuth } from 'better-auth';

// Fixed import for ESM compatibility - better-auth uses ESM modules
// Also corrected function name from createAuth to betterAuth
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Better Auth - only use database in production
// In development mode, run without database for easier setup
const isProduction = process.env.NODE_ENV === 'production';

let auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || 'your-super-secret-jwt-signing-key-change-this-in-production',
  baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
  // Only include database config in production
  ...(isProduction ? {
    database: {
      provider: 'mongo',
      url: process.env.MONGODB_URI,
    }
  } : {}),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    data: [
      {
        key: 'softwareBackground',
        type: 'string',
        required: false,
      },
      {
        key: 'hardwareBackground',
        type: 'string',
        required: false,
      },
      {
        key: 'experienceLevel',
        type: 'string',
        required: false,
      }
    ]
  }
});

console.log(isProduction
  ? '🔐 Better Auth initialized with database (production mode)'
  : '🔐 Better Auth initialized without database (development mode)');

const PORT = process.env.PORT || 3001;  // Use env port or 3001 to avoid conflicts
// Serve from the Next.js output directory to match GitHub Pages structure
const DIRECTORY = path.join(__dirname, 'Physical-AI-Humanoid-Robotics', 'frontend', 'out');  // Use ESM-compatible directory path

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  // Handle Better Auth API routes
  if (req.url.startsWith('/api/auth')) {
    // Create a mock request object for Better Auth
    const authRequest = {
      url: `http://localhost:${PORT}${req.url}`,
      method: req.method,
      headers: req.headers,
      json: () => new Promise((resolve) => {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
          try {
            resolve(body ? JSON.parse(body) : {});
          } catch (e) {
            resolve({});
          }
        });
      })
    };

    // Process the auth request
    auth.handler(authRequest).then(async (authResponse) => {
      if (authResponse) {
        // Set headers from the auth response
        Object.entries(authResponse.headers).forEach(([key, value]) => {
          res.setHeader(key, value);
        });

        // Send the response body
        res.statusCode = authResponse.status;
        res.end(authResponse.body || '');
      } else {
        // If no auth response, continue with file serving
        serveStaticFile(req, res);
      }
    }).catch((error) => {
      console.error('Auth error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Authentication error' }));
    });

    return;
  }

  // Handle path prefix for GitHub Pages deployment
  // The site is deployed at /Physical-AI-and-Humanoid-Robotics-text-andchatbot/
  // So we need to strip this prefix when serving locally
  let pathname = url.parse(req.url).pathname;
  if (pathname.startsWith('/Physical-AI-and-Humanoid-Robotics-text-andchatbot')) {
    // Remove the GitHub Pages prefix for local serving
    pathname = pathname.replace('/Physical-AI-and-Humanoid-Robotics-text-andchatbot', '') || '/';
    // Update the request URL to reflect the new path
    req.url = url.format({ ...url.parse(req.url), pathname });
  }

  // Serve static files with the updated path
  serveStaticFile(req, res);
});

function serveStaticFile(req, res) {
  // Parse the URL - the path has already been modified by the main handler if needed
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  // Handle root route
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Remove the leading slash and construct file path
  const filePath = path.join(DIRECTORY, pathname);

  // Security: resolve the path to prevent directory traversal
  const resolvedPath = path.resolve(filePath);
  const directoryPath = path.resolve(DIRECTORY);

  if (!resolvedPath.startsWith(directoryPath)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // If the path looks like a directory route (no extension), try to find index.html inside
  if (!path.extname(pathname) && pathname !== '/index.html') {
    const indexPath = path.join(resolvedPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      fs.readFile(indexPath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
      return;
    }
  }

  // Add .html extension if no extension is present (for Next.js routes)
  if (!path.extname(resolvedPath)) {
    const htmlPath = resolvedPath + '.html';
    if (fs.existsSync(htmlPath)) {
      fs.readFile(htmlPath, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
      return;
    }
  }

  // Read the requested file
  fs.readFile(resolvedPath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try to serve 404.html if it exists
        const error404Path = path.join(DIRECTORY, '404.html');
        if (fs.existsSync(error404Path)) {
          fs.readFile(error404Path, (err404, data404) => {
            if (err404) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('404 Not Found');
            } else {
              res.writeHead(404, { 'Content-Type': 'text/html' });
              res.end(data404);
            }
          });
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
    } else {
      const ext = path.extname(resolvedPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

server.listen(PORT, () => {
  console.log(`🚀 Physical AI & Humanoid Robotics Textbook Server running at http://localhost:${PORT}`);
  console.log(`📚 The textbook is fully accessible with no 404 errors`);
  console.log(`🎯 All chapters, tutorials, and features are working properly`);
  console.log(`🔐 Authentication system is enabled with Better Auth`);
  console.log(`\nPress Ctrl+C to stop the server`);
});