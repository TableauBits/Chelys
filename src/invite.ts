// TYPE / CONST

import { ResponseStatus } from "./client";

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
  invite: Invite;
}