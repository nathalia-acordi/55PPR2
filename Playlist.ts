import { Musica } from "./Musica";
export class Playlist {
  titulo: String;
  musicas: Musica[];

  constructor(titulo: String) {
    this.titulo = titulo;
    this.musicas = [];
  }

  adicionarMusica(musica: Musica): void {
    this.musicas.push(musica);
  }

  removerMusica(tituloMusica: string): void {
    this.musicas = this.musicas.filter(
      (musica) => musica.titulo !== tituloMusica
    );
  }

  listarMusicas(): void {
    console.log(`Playlist: ${this.titulo}`);
    this.musicas.forEach((musica, index) => {
      console.log(
        `${index + 1}: ${musica.titulo} - ${musica.artistas} (${
          musica.duracao
        } segundos)`
      );
    });
  }
}
