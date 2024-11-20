export type jogo = {
  id?: number;
  nome: string;
  imagemurl: string;
  descricao: string;
  preco: number;
  categoria: string;
};
export type user = {
  id?: number;
  nome: string;
  email: string;
  senha: string;
};

export type JogoEditado = {
  item: jogo | undefined;
  editando: boolean;
};
