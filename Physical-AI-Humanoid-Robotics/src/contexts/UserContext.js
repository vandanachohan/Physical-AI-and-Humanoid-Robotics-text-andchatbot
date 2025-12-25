import React, { createContext, useContext, useState, useEffect } from 'react';
import { useBaseClient } from '@better-auth/react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { signIn, signOut, getSession } = useBaseClient();

  useEffect(() => {
    // Check if user is logged in by getting session from Better Auth
    const fetchSession = async () => {
      try {
        const session = await getSession();
        if (session) {
          setUser(session.user);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [getSession]);

  const login = async (email, password) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Get the updated session
      const session = await getSession();
      if (session) {
        setUser(session.user);
        return { success: true, user: session.user };
      } else {
        return { success: false, error: 'Failed to get session after login' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      // Extract the required fields for registration
      const { name, email, password } = userData;
      const { softwareBackground, hardwareBackground, experienceLevel } = userData;

      // Register the user with Better Auth
      const result = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          // Include the additional fields for personalization
          softwareBackground,
          hardwareBackground,
          experienceLevel
        }),
      });

      const response = await result.json();

      if (!result.ok) {
        throw new Error(response.error || 'Registration failed');
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
      await signOut({ redirect: false });
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
    login,
    register,
    logout,
    updateUserBackground,
    loading
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};