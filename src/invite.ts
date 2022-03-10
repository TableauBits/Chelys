// TYPE / CONST

export interface Invite {
  id: string;
  createdBy: string;
  date: string;
}

// REQUESTS / RESPONSES

export interface InvReqNew {}

export interface InvReqGet {}

export interface InvReqDelete {
  id: string;
}

export interface InvResUnsubscribe {}

export interface InvResUpdate {
  invite: Invite;
}