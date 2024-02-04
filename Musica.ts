import { Artista } from "./Artista";
import { EstadoMusica } from "./EstadoMusica";
import { Concluida } from "./Concluida";
export class Musica {
  titulo: string;
  duracao: number;
  genero: string;
  estado: EstadoMusica;
  artistas: Artista[];

  constructor(titulo: string, duracao: number, genero: string) {
    this.titulo = titulo;
    this.duracao = duracao;
    this.genero = genero;
    this.artistas = [];
    this.estado = new Concluida();
  }

  setEstado(estado: EstadoMusica): void {
    this.estado = estado;
  }

  play(): void {
    this.estado.play(this);
  }

  pause(): void {
    this.estado.pause(this);
  }

  stop(): void {
    this.estado.stop(this);
  }

  //   accept(visitor: Visitor): void {
  //     visitor.visitMusica(this);
  //   }
}
