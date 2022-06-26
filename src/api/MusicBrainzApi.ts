import { Api } from "./Api";

export class MusicBrainzApi {
  // TODO: Write me the interfaces
  static getArtist = (mbid: string) => Api.get<any>(`https://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json`);

  static getSong = (mbid: string) => Api.get<any>(`https://musicbrainz.org/ws/2/song/${mbid}?inc=url-rels&fmt=json`);
}
