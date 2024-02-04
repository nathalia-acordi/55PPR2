import { DecoradorMusica } from "./DecoradorMusica";
import { EstadoMusica } from "./IEstadoMusica";

class LoopMusicaDecorator extends DecoradorMusica {
  setEstado(estado: EstadoMusica): void {
    // Altera o estado para em loop
    this.musica.setEstado(estado);
  }
}
