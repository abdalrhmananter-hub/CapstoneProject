// src/Context/AuthContext.tsx
import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';

// --- Types ---
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

// --- Context ---
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Provider ---
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Example: check for existing session on mount
  useEffect(() => {
    // Simulate loading stored user from localStorage / token
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
  setLoading(true);
  try {
    const response = await fakeApiLogin(email, password);
    if (response.success && response.user) {
      setUser(response.user);          // ✅ response.user is defined here
      localStorage.setItem('user', JSON.stringify(response.user));
      return true;
    }
    // If login fails, set user to null
    setUser(null);
    return false;
  } finally {
    setLoading(false);
  }
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// --- Custom hook to use auth ---
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// --- Mock API (replace with real logic) ---
async function fakeApiLogin(email: string, password: string): Promise<{ success: boolean; user?: User }> {
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate delay
  if (email === 'test@example.com' && password === 'password') {
    return {
      success: true,
      user: { id: '1', email: 'test@example.com', name: 'Test User' },
    };
  }
  return { success: false };
}