// TYPE

export const OWNER_INDEX = 0;

export enum ConstitutionType {
	GRADE,
	LENGTH
}

export enum AnonymousLevel {
	PUBLIC,
	NO_USERNAME,
	SOUND_ONLY
}

export interface Constitution {
	id: string;
	season: number;
	part: number;
	name: string;
	isPublic: boolean;
	anonymousLevel: AnonymousLevel;
	type: ConstitutionType;
	state: number;
	playlistLink: string;

	users: string[];                // user[0] as owner
	maxUserCount: number;
	numberOfSongsPerUser: number;
}

export const EMPTY_CONSTITUTION: Constitution =  {
  id : '',
  name: '',
  season: -1,
  part: -1,
  isPublic: false,
  anonymousLevel: -1,
  maxUserCount: -1,
  type: -1,
  state: -1,
  numberOfSongsPerUser: -1,
  playlistLink: '',
  users: []
}

// REQUESTS / RESPONSES

export interface CstReqGet {
	ids: string[];
}

export interface CstReqCreate {
	cstData: Constitution;
}

export interface CstReqJoin {
	id: string;
}

export interface CstReqUnsubscribe {
	ids: string[];
}

export interface CstResUpdate {
	cstInfo: Constitution;
}

export type CstReqGetFromUser = {}