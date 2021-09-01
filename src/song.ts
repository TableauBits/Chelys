export enum SongPlateform {
  YOUTUBE
}

export interface Song {
  id: number
  title: string;
  platform: SongPlateform;
  url: string;
  user: string;
  author: string;
}

const EMPTY_SONG: Song = {
  id: -1,
  title: '',
  platform: -1,
  url: '',
  user: '',
  author: '',
}
