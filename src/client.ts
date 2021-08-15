// TYPE

export interface ResponseStatus {
	success: boolean;
	status: string;
}

// REQUESTS / RESPONSES

export interface CltReqAuthenticate {
	idToken: string;
}

export interface CltReqPing {
	data: string;
}