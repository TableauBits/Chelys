import { ResponseStatus } from "./client";

// TYPE / CONST

export interface Invite {
	id: string;
	createdBy: string;
	date: string;
}

export interface NewAccount {
	uid: string;
	displayName: string;
	email: string;
	photoURL: string;
}

// REQUESTS / RESPONSES

export interface InvReqNew { }

export interface InvReqDelete {
	id: string;
}

export interface InvReqGetAll { }

export interface InvReqCheck {
	id: string;
	account: NewAccount;
}

export interface InvReqUnsubscribe { }

export interface InvResCheck {
	status: ResponseStatus;
}

export interface InvResUpdate {
	status: "added" | "modified" | "removed";
	invite: Invite;
}