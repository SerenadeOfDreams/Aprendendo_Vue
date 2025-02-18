export interface ICard {
  id: string;
  titulo: string;
  // descricao: string;
  descricao: { tipo: "texto" | "imagem"; valor: string };
  // descricao: any;
}
