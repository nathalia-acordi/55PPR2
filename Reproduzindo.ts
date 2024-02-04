import { EstadoMusica } from "./EstadoMusica";
import { Musica } from "./Musica";

import { Pausada } from "./Pausada";
import { Concluida } from "./Concluida";
export class Reproduzindo implements EstadoMusica {
  play(musica: Musica): void {
    console.log("A música já está sendo reproduzida.");
  }

  pause(musica: Musica): void {
    console.log("Música pausada.");
    musica.setEstado(new Pausada());
  }

  stop(musica: Musica): void {
    console.log("Reprodução da música parada.");
    musica.setEstado(new Concluida());
  }
}
