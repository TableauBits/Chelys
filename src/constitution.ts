// TYPE

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