import { Musica } from "./Musica";
export interface EstadoMusica {
    play(musica: Musica): void;
    pause(musica: Musica): void;
    stop(musica: Musica): void;
}