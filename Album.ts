import { IComponenteMusical } from "./IComponenteMusical";
import { Musica } from "./Musica";
export class Album implements IComponenteMusical {
  titulo: String;
  anoLancamento: String;
  musicas: Musica[];

  constructor(titulo: String, anoLancamento: String) {
    this.titulo = titulo;
    this.anoLancamento = anoLancamento;
    this.musicas = [];
  }

  adicionarMusica(musica: Musica): void {
    this.musicas.push(musica);
  }

  play(): void {
    console.log(`Reproduzindo álbum: ${this.titulo}`);
    this.musicas.forEach((musica) => musica.play());
  }

  removerMusica(tituloMusica: string): void {
    this.musicas = this.musicas.filter(
      (musica) => musica.titulo !== tituloMusica
    );
  }

  listarMusicas(): void {
    console.log(`Músicas do álbum ${this.titulo}:`);
    this.musicas.forEach((musica, index) => {
      console.log(
        `${index + 1}. ${musica.titulo} (${musica.duracao} segundos)`
      );
    });
  }
}
