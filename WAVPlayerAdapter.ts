import { WAVPlayer } from "./WAVPlayer";
export class WAVPlayerAdapter implements ReprodutorMusica {
  constructor(private wavPlayer: WAVPlayer) {}

  play(file: string): void {
    this.wavPlayer.playSound(file);
  }

  stop(): void {
    this.wavPlayer.halt();
  }
}
