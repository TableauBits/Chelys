// TYPE / CONST

import { SongPlatform } from "./song";

export interface History {
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

export interface HistoryReqGetAll {}

export interface HistoryResUpdate {
  history: History;
}
