import { Api } from "./Api";

export class MusicBrainzApi {
  // TODO: Write me the interface
  static getArtist = (mbid: string) => Api.get<any>(`https://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json`, {headers: {
    'User-Agent': 'Headphones/-1.0.0 (windows x64)'
  }});

  static getSong = (mbid: string) => Api.get<any>(`https://musicbrainz.org/ws/2/song/${mbid}?inc=url-rels&fmt=json`);
}
