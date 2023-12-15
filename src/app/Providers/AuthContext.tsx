"use client";
import http from "@/http";
import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";

type User = {
  id: number;
  name: string;
  role: string;
  image?: string;
};

type loginForm = {
  email: string;
  password: string;
};

type TokenPayload = {
  sub: number;
  name: string;
  role: string;
  image?: string;
};

interface AuthContextType {
  user: User | null;
  login: (values: any) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

function getPayloadFromToken(token: string): TokenPayload | null | undefined {
  try {
    const [, payloadBase64] = token.split(".");
    const payload = JSON.parse(atob(payloadBase64)) as TokenPayload;
    return payload;
  }
  catch(error) {
    console.error("Erro ao decodificar o token: ", error)
    return null;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const payload = getPayloadFromToken(token);
      if (payload) {
        const { sub: id, name, role, image } = payload;
        setUser({ id, name, role, image });
      } else {
        console.error(
          "Token inválido ou não contém informações necessárias."
        );
      }
    }
    setLoading(false);
  }, []);

  const login = async (
    values: loginForm
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await http.post("/auth/login", values);
      const accessToken = JSON.stringify(response.data.access_token).replace(
        /^"(.*)"$/,
        "$1"
      );
      localStorage.setItem("token", accessToken);
      if (accessToken) {
        const payload = getPayloadFromToken(accessToken);
        if (payload && payload.sub && payload.name && payload.role && payload.image) {
          const { sub: id, name, role, image } = payload;
          setUser({ id, name, role, image });
          return { success: true };
        } else {
          console.error(
            "Token inválido ou não contém informações necessárias."
          );
          return { success: false, error: "Token inválido" };
        }
      } else {
        console.error("Token não encontrado na resposta do servidor.");
        return { success: false, error: "Token não encontrado" };
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);

      if (error.response && error.response.status === 401) {
        return { success: false, error: "Usuário ou senha inválidos" };
      } else {
        return { success: false, error: "Erro ao processar a solicitação" };
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  if(loading) return (<div>Carregando...</div>)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};
