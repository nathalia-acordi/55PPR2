import { EstadoMusica } from "./IEstadoMusica";
import { Musica } from "./Musica";
import { Reproduzindo } from "./Reproduzindo";
import { Concluida } from "./Concluida";
export class Pausada implements EstadoMusica {
  play(musica: Musica): void {
    console.log("Retomando a música.");
    musica.setEstado(new Reproduzindo());
  }

  pause(musica: Musica): void {
    console.log("A música já está pausada.");
  }

  stop(musica: Musica): void {
    console.log("Reprodução da música parada.");
    musica.setEstado(new Concluida());
  }
}
