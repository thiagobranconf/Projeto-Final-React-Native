import { jogo } from "../types/types";
import api from "./api";

export const getJogos = async (): Promise<jogo[]> => {
  const { data } = await api.get("/jogos");
  return data;
};

export const createJogo = async (novoJogo: Omit<jogo, "id">): Promise<jogo> => {
  const { data } = await api.post("/jogos", novoJogo);
  return data;
};

export const deleteJogo = async (id: number): Promise<jogo> => {
  const { data } = await api.delete("/jogos/" + id);
  return data;
};

export const updateJogo = async (JogoEditado: jogo): Promise<jogo> => {
  const { data } = await api.put("/jogos/" + JogoEditado.id, JogoEditado);
  return data;
};

export const getCategorias = async (): Promise<string[]> => {
  const { data } = await api.get<jogo[]>("/jogos");
  const categorias = [...new Set(data.map((jogo: jogo) => jogo.categoria))];
  return categorias;
};
