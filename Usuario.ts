import { Playlist } from "./Playlist";
export class Usuario {
  nome: String;
  playlists: Playlist[];

  constructor(nome: string) {
    this.nome = nome;
    this.playlists = []; 
  }

  adicionarPlaylist(playlist: Playlist): void {
    this.playlists.push(playlist);
  }

  removerPlaylist(tituloPlaylist: string): void {
    this.playlists = this.playlists.filter(
      (playlist) => playlist.titulo !== tituloPlaylist
    );
  }

  listarPlaylists(): void {
    console.log(`Playlists de ${this.nome}:`);
    this.playlists.forEach((playlist, index) => {
      console.log(`${index + 1}: ${playlist.titulo}`);
    });
  }
}
