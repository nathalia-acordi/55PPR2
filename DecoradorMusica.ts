import { IDecoradorMusica } from "./IDecoradorMusica";
import { EstadoMusica } from "./IEstadoMusica";
import { Musica } from "./Musica";

export class DecoradorMusica implements IDecoradorMusica {
  public musica: Musica;

  setEstado(estado: EstadoMusica): void {
    this.musica.setEstado(estado);
  }
}
