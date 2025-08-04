import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = { email, username, ... }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally decode token or fetch user data from backend
      setUser({ token }); // You can expand this later
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};