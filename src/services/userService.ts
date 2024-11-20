import { user } from "../types/types";
import api from "./api";

export const getUsers = async (): Promise<user[]> => {
  const { data } = await api.get("/users");
  return data;
};

export const createUser = async (novoUser: Omit<user, "id">): Promise<user> => {
  const { data } = await api.post("/users", novoUser);
  return data;
};

export const deleteUser = async (id: number): Promise<user> => {
  const { data } = await api.delete("/users/" + id);
  return data;
};

export const updateUser = async (UserEditado: user): Promise<user> => {
  const { data } = await api.put("/users/" + UserEditado.id, UserEditado);
  return data;
};
