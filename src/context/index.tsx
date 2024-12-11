import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
  authenticateUser: (userId: string, token: string) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUserId = localStorage.getItem("userId");

    if (savedToken && savedUserId) {
      setToken(savedToken);
      setUserId(savedUserId);
      setIsAuthenticated(true);
    }
  }, []);

  const authenticateUser = (userId: string, token: string) => {
    setUserId(userId);
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  };

  const logoutUser = () => {
    setUserId(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider
      value={{
        userId,
        token,
        isAuthenticated,
        authenticateUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
