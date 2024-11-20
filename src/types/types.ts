export type jogo = {
  id: number;
  nome: string;
  imagemurl: string;
  descricao: string;
  preco: number;
  categoria: string;
};

export type JogoEditado = {
  item: jogo | undefined;
  editando: boolean;
};
