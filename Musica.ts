import { Artista } from "./Artista";
import { EstadoMusica } from "./IEstadoMusica";
import { Concluida } from "./Concluida";
import { IComponenteMusical } from "./IComponenteMusical";
export class Musica implements IComponenteMusical {
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
