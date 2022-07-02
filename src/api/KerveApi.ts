import { Api } from "./Api";

export interface IArtist {
  listeners: number;
  name: string;
  scrobbles: number;
  weight: number;
  url: string;
  image: string;
}

export interface ITopArtists {
  results: {
    artist: IArtist[];
  }
}

export interface ITrack {
  artist: string;
  listeners: number;
  name: string;
  scrobbles: number;
  weight: number;
  artist_url: string;
  url: string;
  image: string;
}

export interface ITopTracks {
  results: {
    track: ITrack[];
  }
}

export class KerveApi {
  static get = <T = unknown>(method: string) => Api.get<T>(`https://kerve.last.fm/kerve/${method}`);

  static getTopArtists = () => KerveApi.get<ITopArtists>(`charts?type=artist&nr=100&format=json`);

  static getTopTracks = () => KerveApi.get<ITopTracks>(`charts?type=track&nr=100&format=json`);

  static getSimilarArtists = (artistId: string) => KerveApi.get<unknown>(`similarartists?artist=${artistId}&autocorrect=1&tracks=0&image_size=large&limit=30&format=json`)
}