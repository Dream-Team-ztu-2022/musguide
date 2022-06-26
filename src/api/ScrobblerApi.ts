import { Api } from "./Api";

export interface IAttributes {
  page: number;
  perPage: number;
  totalPages: number;
  total: number;
}

export type TImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';

export type TStreamable = 0 | 1;

export interface IImage {
  '#text': string; // url
  size: TImageSize;
}

export interface IArtistShort {
  name: string;
  mbid: string;
  url: string;
}

export interface IArtist extends IArtistShort {
  playcount: number;
  listeners: number;
  streamable: TStreamable;
  image: IImage[];
}

export interface ITopArtists {
  artists: {
    artist: IArtist[];
    '@attr': IAttributes;
  }
}

export interface ITrack {
  name: string;
  duration: number;
  playcount: number;
  listeners: number;
  mbid: string;
  url: string;
  streamable: {
    '#text': TStreamable;
    fulltrack: TStreamable;
  };
  artist: IArtistShort;
  image: IImage[];
}

export interface ITopTracks {
  tracks: {
    track: ITrack[];
    '@attr': IAttributes;
  }
}

export interface ITag {
  name: string;
  url: string;
  reach: number;
  taggings: string;
  streamable: TStreamable;
  wiki: Record<string, unknown>;
}

export interface ITopTags {
  tags: {
    tag: ITag[];
    '@attr': IAttributes;
  }
}

export interface IArtistSearch {
  results: {
    artistmatches: {
      artist: IArtist[];
    }
    // ...
  }
}

export interface ITrackSearch {
  results: {
    trackmatches: {
      track: ITrack[];
    }
    // ...
  }
}

export class ScrobblerApi {
  static getTopArtists = () => Api.getScrobbler<ITopArtists>('chart.gettopartists&limit=100');

  static getTopTracks = () => Api.getScrobbler<ITopTracks>('chart.getTopTracks&limit=100');

  static getTopTags = () => Api.getScrobbler<ITopTags>('chart.gettoptags&limit=100');

  static searchArtist = (name: string) => Api.getScrobbler<IArtistSearch>(`artist.search&artist=${name}`);

  static searchTrack = (name: string) => Api.getScrobbler<ITrackSearch>(`track.search&track=${name}`);
}
