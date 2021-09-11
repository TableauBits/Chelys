// TYPE / CONST

export enum SongPlatform {
  YOUTUBE
}

export interface Song {
  id: number
  title: string;
  platform: SongPlatform;
  url: string;
  user: string;
  author: string;
}

export const EMPTY_SONG: Song = {
  id: -1,
  title: '',
  platform: -1,
  url: '',
  user: '',
  author: '',
}

// REQUESTS / RESPONSES

export interface CstSongReqAdd {
  cstId: string;
  songData: Song;
}

export interface CstSongReqRemove {
  cstId: string;
  songId: number;
}

export interface CstSongReqGetAll {
  cstId: string;
  uid: string;
}

export interface CstSongResUpdate {
  songInfo: Song;
  status: "added" | "modified" | "removed";
}

export interface CstSongReqUnsubscribe {
  cstId: string;
}