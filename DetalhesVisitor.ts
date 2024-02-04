import { Musica } from "./Musica";
import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { IVisitor } from "./IVisitor";

export class DetalhesVisitor implements IVisitor {
  visitMusica(musica: Musica): void {
    console.log(`Musica: ${musica.titulo}`);
  }

  visitAlbum(album: Album): void {
    console.log(`Album: ${album.titulo}`);
  }

  visitPlaylist(playlist: Playlist): void {
    console.log(`Playlist: ${playlist.titulo}`);
  }
}
