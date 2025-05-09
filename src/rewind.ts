import { Song } from "./song";

// TYPES
export interface RewindFav {
  count: number;
  fromUsers: Map<string, number>;
  perUser: Map<string, number>;
  totalAvailable: number;
}

export interface RewindRankSong {
  id: string;
  rank: number;
  score: number;
  mean_score: number;
}

export interface RewindDecades {
  meanVotes: Map<string, number>;
  participation: Map<string, number>;
}

export interface RewindGenres {
  meanVotes: Map<string, number>;
  participation: Map<string, number>;
}

export interface RewindLanguages {
  meanVotes: Map<string, number>;
  participation: Map<string, number>;
}

export interface RewindMissingInfos {
  decades: number;
  genres: number;
  languages: number;
}

export interface RewindUser {
  meanScoreFromUser: Map<string, number>;
  meanScorePerUser: Map<string, number>;
}

export interface RewindBaseStats {
  authors: Map<string, number>;
  bestSongs: { songs: RewindRankSong[]; };
  decades: RewindDecades;
  displayName: string;
  fav: RewindFav;
  genres: RewindGenres;
  languages: RewindLanguages;
  missing: RewindMissingInfos;
  nConstitutions: number;
  nSongs: number;
  nVotes: number;
  uid: string;
  users: RewindUser;
  worstSongs: { songs: RewindRankSong[]; };
}

export interface ConstitutionMetadata {
  nSongs: number;
  name: string;
}

export interface Metadata {
  cstInfo: Map<string, ConstitutionMetadata>;
  songInfo: Map<string, Song>;
}

export interface Team {
  extremist: string;
  leader: string;
  members: string[];
  name: string;
}

export interface RewindPerYear {
  baseStats: RewindBaseStats;
  metadata: Metadata;
  teamSongs: Team;
  teamVotes: Team;
}

export const EMPTY_REWIND: RewindPerYear = {
  baseStats: {
    authors: new Map(),
    bestSongs: {
      songs: []
    },
    decades: {
      meanVotes: new Map(),
      participation: new Map()
    },
    displayName: '',
    fav: {
      count: 0,
      fromUsers: new Map(),
      perUser: new Map(),
      totalAvailable: 0
    },
    genres: {
      meanVotes: new Map(),
      participation: new Map()
    },
    languages: {
      meanVotes: new Map(),
      participation: new Map()
    },
    missing: {
      decades: 0,
      genres: 0,
      languages: 0
    },
    nConstitutions: 0,
    nSongs: 0,
    nVotes: 0,
    uid: '',
    users: {
      meanScoreFromUser: new Map(),
      meanScorePerUser: new Map()
    },
    worstSongs: {
      songs: []
    }
  },
  metadata: {
    cstInfo: new Map(),
    songInfo: new Map()
  },
  teamSongs: {
    extremist: '',
    leader: '',
    members: [],
    name: ''
  },
  teamVotes: {
    extremist: '',
    leader: '',
    members: [],
    name: ''
  }
};

// REQUESTS
export interface RwdReqGet {
  uid: string;
}

export interface RwdReqUnsubscribe {
  uid: string;
}

// RESPONSES
export interface RwdResUpdate {
  year: number;
  rewind: RewindPerYear;
}
