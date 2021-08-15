// TYPE

export interface ResponseStatus {
	success: boolean;
	status: string;
}

// REQUESTS / RESPONSES

export interface CLTReqAuthenticate {
	idToken: string;
}
