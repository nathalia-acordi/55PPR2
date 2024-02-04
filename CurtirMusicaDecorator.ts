import { DecoradorMusica } from "./DecoradorMusica";
import { EstadoMusica } from "./IEstadoMusica";

class CurtirMusicaDecorator extends DecoradorMusica {
  setEstado(estado: EstadoMusica): void {
    // Altera o estado para curtida
    this.musica.setEstado(estado);
  }
}
