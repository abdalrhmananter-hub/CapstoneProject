// src/Context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();
// Think of Context as a global state container that any component can access directly, without passing props through intermediate components.

export const AuthProvider = ({ children }) => {
 

  return (
    <AuthContext.Provider value={{ 
      // place here what u want to export (func, var)
    }}>
      {children}
    </AuthContext.Provider>
  );
};
