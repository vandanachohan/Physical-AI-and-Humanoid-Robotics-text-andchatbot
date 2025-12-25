import React, { createContext, useContext, useState, useEffect } from 'react';
// Better Auth client-side integration
import { createAuthClient } from 'better-auth/client';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Initialize the Better Auth client
let authClient;

// Get the base URL from environment variables or use a default
const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    // Client-side
    return window.location.origin;
  } else {
    // Server-side - use environment variable or default
    return process.env.NEXT_PUBLIC_AUTH_BASE_URL || 'http://localhost:3000';
  }
};

authClient = createAuthClient({
  baseURL: getBaseURL(),
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in by getting session from Better Auth
    const fetchSession = async () => {
      try {
        const session = await authClient.getSession();
        if (session?.session) {
          setUser(session.session.user);
        } else {
          // Explicitly set user to null if no session exists
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        // In case of error, explicitly set user to null to show auth buttons
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  const login = async (email, password) => {
    try {
      const result = await authClient.signIn.email({
        email,
        password,
        // Don't redirect
        callbackURL: '/dashboard', // This will be ignored due to redirect: false equivalent
      });

      if (result?.error) {
        throw new Error(result.error?.message || 'Login failed');
      }

      // Get the updated session
      const sessionData = await authClient.getSession();
      if (sessionData?.session) {
        setUser(sessionData.session.user);
        return { success: true, user: sessionData.session.user };
      } else {
        return { success: false, error: 'Failed to get session after login' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message || 'Login failed' };
    }
  };

  const register = async (userData) => {
    try {
      // Extract the required fields for registration
      const { name, email, password } = userData;
      const { softwareBackground, hardwareBackground, experienceLevel } = userData;

      // Register the user with Better Auth
      const result = await authClient.signUp.email({
        name,
        email,
        password,
        // Include the additional fields for personalization
        // Better Auth allows custom fields to be passed during registration
        $fields: {
          softwareBackground,
          hardwareBackground,
          experienceLevel
        }
      });

      if (result?.error) {
        throw new Error(result.error?.message || 'Registration failed');
      }

      // Automatically log in the user after registration
      return await login(email, password);
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await authClient.signOut();
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateUserBackground = async (backgroundData) => {
    if (!user) return;

    try {
      // For now, just update the local state
      // In a production setup, we would need to update the user in the database
      // Better Auth might not have a direct method for this, so we may need to implement
      // a custom API endpoint on the server side
      const updatedUser = {
        ...user,
        softwareBackground: backgroundData.software,
        hardwareBackground: backgroundData.hardware,
        experienceLevel: backgroundData.experienceLevel
      };

      setUser(updatedUser);
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Update user background error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUserBackground
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};