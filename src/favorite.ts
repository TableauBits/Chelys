// TYPE / CONST

export const FAVORITES_MAX_LENGTH = 8;

export interface UserFavorites {
  uid: string;
  favs: number[];
}

// REQUESTS / RESPONSES

export interface CstFavReqAdd {
  cstId: string;
  songId: number;
}

export interface CstFavReqRemove {
  cstId: string;
  songId: number;
}

export interface CstFavReqGet {
  cstId: string;
}

export interface CstFavReqUnsubscribe {
  cstId: string;
}

export interface CstFavResUpdate {
  userFavorites: UserFavorites;
}