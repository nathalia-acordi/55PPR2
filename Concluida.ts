import { EstadoMusica } from "./EstadoMusica";
import { Musica } from "./Musica";
import { Reproduzindo } from "./Reproduzindo";

export class Concluida implements EstadoMusica {
  play(musica: Musica): void {
    console.log("Começando a música novamente do início.");
    musica.setEstado(new Reproduzindo());
  }

  pause(musica: Musica): void {
    console.log("Não pode pausar. A música já foi concluída.");
  }

  stop(musica: Musica): void {
    console.log("A música já está parada.");
  }
}
