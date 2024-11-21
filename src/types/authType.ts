export type AuthContextProps = {
  user: User | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type User = {
  nome: string;
  email: string;
};
