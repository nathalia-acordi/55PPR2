import { Musica } from "./Musica";
import { Album } from "./Album";
import { Playlist } from "./Playlist";
export interface IVisitor {
  visitMusica(musica: Musica): void;
  visitAlbum(album: Album): void;
  visitPlaylist(playlist: Playlist): void; 
}
