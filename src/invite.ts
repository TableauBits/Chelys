import { ResponseStatus } from "./client";

// TYPE / CONST

export interface Invite {
  id: string;
  createdBy: string;
  date: string;
}

// REQUESTS / RESPONSES

export interface InvReqNew {}

export interface InvReqGetAll {}

export interface InvRefCheck{
  id: string;
}

export interface InvReqDelete {
  id: string;
}

export interface InvResCheck {
  status: ResponseStatus;
}

export interface InvResUnsubscribe {}

export interface InvResUpdate {
  status: "added" | "modified" | "removed";
  invite: Invite;
}