// TodoContext.jsx
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [todos, setTodos] = useState(true);

  return (
    <AuthContext.Provider value={{ todos }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("error 15");
  }
  return context;
};