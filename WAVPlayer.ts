export class WAVPlayer {
  playSound(file: string): void {
    console.log(`Reproduzindo arquivo WAV: ${file}`);
  }

  halt(): void {
    console.log("Parando reprodução WAV");
  }
}
