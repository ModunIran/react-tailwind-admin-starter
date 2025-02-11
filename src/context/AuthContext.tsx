import { clear, getUser, saveToken, saveUser } from "@/lib/localStorageUtils";
import { LoginResponse } from "@/types/response";
import { User } from "@/types/sharedTypes";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextState = {
  user: User | undefined;
  login: (loginRes: LoginResponse) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextState>({
  user: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initUser = (): User => {
    const user = getUser();
    return user || {};
  };
  const [user, setUser] = useState<User>(initUser());

  const login = (loginRes: LoginResponse) => {
    // Implement login logic here (e.g., API call)
    const user: User = {};
    saveUser(user);
    setUser(user);
    saveToken(loginRes.access_token);
  };

  const logout = () => {
    // Implement logout logic here
    setUser(initUser());
    clear();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
