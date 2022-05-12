// TYPE / CONST

import { SongPlatform } from "./song";

export interface History {
  id: string;
  season: number;
  part: number;
  name: string;
  date: string;
  title: string;
  platform: SongPlatform;  // enum SongPlatform
  url: string;
  user: string;
  author: string;
  users: string[];
  // type: ConstitutionType;
}

// REQUESTS / RESPONSES

export interface HistoryReqGet {}

export interface HistoryResGet {
  history: History;
}
