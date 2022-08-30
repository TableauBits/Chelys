// TYPE / CONST

export const FAVORITES_MAX_LENGTH = 8;

export interface UserFavorites {
  uid: string;
  favs: number[];
}

// REQUESTS / RESPONSES

export interface FavReqAdd {
  cstId: string;
  songId: number;
}

export interface FavReqRemove {
  cstId: string;
  songId: number;
}

export interface FavReqGet {
  cstId: string;
}

export interface FavReqUnsubscribe {
  cstId: string;
}

export interface FavResUpdate {
  userFavorites: UserFavorites;
}