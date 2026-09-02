import React, { createContext, useContext, useMemo, useState } from 'react';
import * as authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      user,
      login: async (email, password) => {
        const result = await authService.login(email, password);
        setUser(result.user);
      },
      register: async (email, password) => {
        const result = await authService.register(email, password);
        setUser(result.user);
      },
      logout: async () => {
        await authService.logout();
        setUser(null);
      }
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
