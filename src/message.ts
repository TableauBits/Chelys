export interface Message<T> {
	event: string
	data: T
}

export function createMessage<T>(event: string, data: T): string {
	return JSON.stringify({ event: event, data: data });
}

export function extractMessageData<T>(message: Message<unknown>): T {
	return message.data as T;
}
export enum EventType {
	// From client
	CLIENT_authenticate = "CLIENT-authenticate",
	CLIENT_ping = "CLIENT-ping",

	CST_create = "CST-create", 
	CST_get = "CST-get",
	CST_get_from_user = "CST-get-from-user",
	CST_join = "CST-join",
	CST_unsubscribe = "CST-unsubscribe",

	CST_SONG_add = "CST-SONG-add",
	CST_SONG_get_all = "CST-SONG-get-all",
	CST_SONG_get_user = "CST-SONG-get-user",
	CST_SONG_remove = "CST-SONG-remove",

	USER_create = "USER-create",
	USER_edit = "USER-edit",
	USER_get = "USER-get",
	USER_get_all = "USER-get-all",
	USER_unsubscribe = "USER-unsubscribe",


	// From server
	CST_update = "CST-update",

	USER_update = "USER-update",
}
