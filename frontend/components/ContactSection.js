import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#332a52] to-[#4f46e5] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Continue Your Learning Journey</h2>
          <p className="text-lg text-indigo-200 mb-10 max-w-2xl mx-auto">
            Join our community of robotics enthusiasts and AI researchers. Get updates on new content and resources.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-xs mx-auto">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Subscribe</h3>
              <p className="text-indigo-200">Get notified of new chapters and tutorials</p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-white text-[#332a52] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-xs mx-auto">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Discuss with Community</h3>
              <p className="text-indigo-200">Join our Discord community for discussions</p>
              <a
                href="#"
                className="mt-4 inline-block bg-white text-[#332a52] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Join Community
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-indigo-200 mb-6">Connect with us on social media</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com/physicalAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-white text-[#332a52] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </span>
              </a>
              <a
                href="https://github.com/physicalAI-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-white transition duration-300"
                aria-label="GitHub"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-white text-[#332a52] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.146 18.196 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
              <a
                href="https://linkedin.com/company/physicalAI-robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <span className="inline-block w-10 h-10 rounded-full bg-white text-[#332a52] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;