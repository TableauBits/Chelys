// TYPE / CONST

export enum Role {
	ADMIN = "admin",
	DEV = "dev",
	MEMBER = "member",
	TEST = "test",
}

export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	roles: Role[];
	description: string;
}

export const EMPTY_USER: User = {
	uid: '',
	email: '',
	displayName: '',
	photoURL: '',
	roles: [],
	description: '',
}

// REQUESTS / RESPONSES

export interface UsrReqGet {
	uids: string[];
}
export interface UsrReqEdit {
	userData: User;
}
export interface UsrReqUnsubscribe {
	uids: string[];
}

export interface UsrResUpdate {
	userInfo: User;
}
