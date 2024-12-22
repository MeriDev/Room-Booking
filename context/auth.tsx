import { useState, createContext, useEffect, useContext } from 'react';
import checkAuth from '@/app/actions/checkAuth';

type userProps = {
  id: string;
  name: string;
  email: string;
};

type authProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: userProps | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<userProps | undefined>>;
};

type contextProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<authProps | null>(null);

export const AuthProvider = ({ children }: contextProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<userProps | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchAuth = async () => {
      const { isAuthenticated, user } = await checkAuth();
      setIsAuthenticated(isAuthenticated);
      setCurrentUser(user);
    };

    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//custom hhoks
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used whihin an AuthProvider');
  }
  return context;
};
