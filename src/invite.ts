import { ResponseStatus } from "./client";

// TYPE / CONST

export interface Invite {
	id: string;
	createdBy: string;
	date: string;
}

export interface Inviter {
	displayName: string;
	photoURL: string;
}

export interface NewAccount {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
}

// REQUESTS / RESPONSES

export interface InvReqNew { }

export interface InvReqDelete {
	id: string;
}

export interface InvReqGetAll { }

export interface InvReqUnsubscribe { }

export interface InvResCheck {
	status: ResponseStatus;
}

export interface InvResUpdate {
	status: "added" | "modified" | "removed";
	invite: Invite;
}

// GET "/invite/:id"
export interface InvResGET {
	isValid: boolean;
	inviter: Inviter;
}

// POST "/invite/:id"
export interface InvReqPOST {
	newAccount: NewAccount;
}
export interface InvResPOST {
	response: ResponseStatus;
}