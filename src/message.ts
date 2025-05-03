// TYPE / CONST

export interface Message<T> {
	event: string
	data: T
}

export enum EventType {
	// From client
	CLIENT_authenticate = "CLIENT-authenticate",
	CLIENT_ping = "CLIENT-ping",

	CST_create = "CST-create",
	CST_delete = "CST-delete",
	CST_get = "CST-get",
	CST_get_from_user = "CST-get-from-user",
	CST_join = "CST-join",
	CST_name_url = "CST-name-url",
	CST_state = "CST-state",
	CST_unsubscribe = "CST-unsubscribe",

	CST_SONG_add = "CST-SONG-add",
	CST_SONG_get_all = "CST-SONG-get-all",
	CST_SONG_remove = "CST-SONG-remove",
	CST_SONG_unsubscribe = "CST-SONG-unsubscribe",

	CST_SONG_FAV_add = "CST-SONG-FAV-add",
	CST_SONG_FAV_remove = "CST-SONG-FAV-remove",
	CST_SONG_FAV_get = "CST-SONG-FAV-get",
	CST_SONG_FAV_unsubscribe = "CST-SONG-FAV-unsubscribe",

	CST_SONG_GRADE_edit = "CST-SONG-GRADE-edit",
	CST_SONG_GRADE_get_all = "CST-SONG-GRADE-get-all",
	CST_SONG_GRADE_get_user = "CST-SONG-GRADE-get-user",
	CST_SONG_GRADE_get_summary = "CST-SONG-GRADE-get-summary",
	CST_SONG_GRADE_unsubscribe = "CST-SONG-GRADE-unsubscribe",

	INVITE_new = "INVITE-new",
	INVITE_delete = "INVITE-delete",
	INVITE_get_all = "INVITE-get-all",
	INVITE_unsubscribe = "INVITE-unsubscribe",

	PANTHEON_add = "PANTHEON-add",
	PANTHEON_get_all = "PANTHEON-get-all",
	PANTHEON_unsubscribe = "PANTHEON-unsubscribe",

	USER_create = "USER-create",
	USER_edit_profile = "USER-edit-profile",
	USER_edit_roles = "USER-edit-roles",
	USER_get = "USER-get",
	USER_get_all = "USER-get-all",
	USER_unsubscribe = "USER-unsubscribe",

	REWIND_get = "RWD-get",
	REWIND_unsubscribe = "RWD-unsubscribe",

	// From server
	CST_update = "CST-update",
	CST_SONG_update = "CST-SONG-update",
	CST_SONG_FAV_update = "CST-SONG-FAV-update",
	CST_SONG_GRADE_summary_update = "CST-SONG-GRADE-summary-update",
	CST_SONG_GRADE_userdata_update = "CST-SONG-GRADE-userdata-update",
	INVITE_update = "INVITE-update",
	PANTHEON_update = "PANTHEON-update",
	USER_update = "USER-update",
	REWIND_update = "RWD-update",
}

// FUNCTION

export function createMessage<T>(event: string, data: T): string {
	return JSON.stringify({ event: event, data: data });
}

export function extractMessageData<T>(message: Message<unknown>): T {
	return message.data as T;
}