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
  static get = () => Api.get(`https://kerve.last.fm/kerve/charts?type=artist&tracks=1&nr=30&format=json`);

  static getTopArtists = () => Api.get<ITopArtists>(`https://kerve.last.fm/kerve/charts?type=artist&nr=100&format=json`);

  static getTopTracks = () => Api.get<ITopTracks>(`https://kerve.last.fm/kerve/charts?type=track&nr=100&format=json`);
}