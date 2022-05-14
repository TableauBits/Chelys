// TYPE / CONST

import { SongPlatform } from "./song";

export interface PantheonSong {
  id: string;
  season: number;
  part: number;
  name: string;
  date: string;
  title: string;
  platform: SongPlatform;
  url: string;
  user: string;
  author: string;
  users: string[];
}

// REQUESTS / RESPONSES

export interface PantheonReqGetAll {}

export interface PantheonResUpdate {
  pantheon: PantheonSong;
}
