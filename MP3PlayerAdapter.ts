import { MP3Player } from "./MP3Player";
import { ReprodutorMusical } from "./ReprodutorMusical";

export class MP3PlayerAdapter implements ReprodutorMusical {
  private mp3Player: MP3Player;

  constructor(mp3Player: MP3Player) {
    this.mp3Player = mp3Player;
  }

  play(file: string): void {
    this.mp3Player.playFile(file);
  }

  stop(): void {
    this.mp3Player.stopPlayback();
  }
}
