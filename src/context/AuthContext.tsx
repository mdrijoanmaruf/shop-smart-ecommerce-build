
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Define user type
export type User = {
  id: string;
  email: string;
  name: string;
};

// Define context type
type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

// Create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database (in a real app, this would be a server/database call)
const MOCK_USERS: Record<string, { id: string; email: string; name: string; password: string }> = {};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Find user with matching email
    const userEntry = Object.values(MOCK_USERS).find(u => u.email === email);
    
    if (!userEntry) {
      setLoading(false);
      throw new Error("User not found");
    }
    
    if (userEntry.password !== password) {
      setLoading(false);
      throw new Error("Invalid password");
    }
    
    // Create user object without password
    const loggedInUser: User = {
      id: userEntry.id,
      email: userEntry.email,
      name: userEntry.name
    };
    
    // Store in localStorage and state
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    setLoading(false);
    
    toast({
      title: "Login successful",
      description: `Welcome back, ${loggedInUser.name}!`
    });

    // Navigate to dashboard
    navigate("/dashboard");
  };

  // Signup function
  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if email already exists
    if (Object.values(MOCK_USERS).some(u => u.email === email)) {
      setLoading(false);
      throw new Error("Email already in use");
    }
    
    // Create new user
    const newUserId = `user_${Date.now()}`;
    MOCK_USERS[newUserId] = {
      id: newUserId,
      email,
      name,
      password
    };
    
    // Create user object without password
    const newUser: User = {
      id: newUserId,
      email,
      name
    };
    
    // Store in localStorage and state
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    setLoading(false);
    
    toast({
      title: "Account created",
      description: "Your account has been created successfully!"
    });

    // Navigate to dashboard
    navigate("/dashboard");
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
