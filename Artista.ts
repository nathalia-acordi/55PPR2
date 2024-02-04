import { Album } from "./Album";
export class Artista {
  nome: String;
  paisOrigem: String;
  albuns: Album[];

  constructor(nome: String, paisOrigem: String) {
    this.nome = nome;
    this.paisOrigem = paisOrigem;
    this.albuns = [];
  }

  adicionarAlbum(album: Album): void {
    this.albuns.push(album);
  }

  removerAlbum(tituloAlbum: string): void {
    this.albuns = this.albuns.filter((album) => album.titulo !== tituloAlbum);
  }

  listarAlbuns(): void {
    console.log(`Albuns de ${this.nome}:`);
    this.albuns.forEach((album, index) => {
      console.log(`${index + 1}. ${album.titulo} (${album.anoLancamento})`);
    });
  }
}
