import { User } from 'firebase/auth';
import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { auth } from '../utils/firebase';

type AuthContext = {
  user: User | null | undefined;
};
const AuthContext = createContext<AuthContext>({} as AuthContext);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const value = {
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user: any) => {
      setUser(user !== undefined ? user : undefined);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
