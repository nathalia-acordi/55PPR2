export class MP3Player {
  playFile(file: string): void {
    console.log(`Reproduzindo arquivo MP3: ${file}`);
  }

  stopPlayback(): void {
    console.log("Parando reprodução MP3");
  }
}
