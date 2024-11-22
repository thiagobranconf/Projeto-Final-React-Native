import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { AuthContextProps, AuthProviderProps, User } from "../types/authType";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("@user");
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email: string, senha: string) => {
    setLoading(true);
    try {
      const response = await api.get("/users", {
        params: { email, senha },
      });
      const user = response.data.find(
        (user: { email: string; senha: string }) =>
          user.email === email && user.senha === senha
      );
      if (user) {
        setUser(user);
        await AsyncStorage.setItem("@user", JSON.stringify(user));
      } else {
        throw new Error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("@user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
