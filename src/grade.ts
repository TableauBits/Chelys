// TYPE / CONST

export interface GradeVote {
	songId: number;
	grade: number;
}

export interface GradeUserData {
	uid: string;
	values: Map<number, number>;
}

export interface GradeSummary {
	voteCount: number;
	userCount: Map<string, number>
}

// Interface use in Kalimba and compatible with Firebase and JSON

export interface KGradeUserData {
	uid: string;
	values: Record<string, unknown>;
}

export interface KGradeSummary {
	voteCount: number;
	userCount: Record<string, number>
}

// REQUESTS / RESPONSES

export interface GradeReqEdit {
	cstId: string,
	voteData: GradeVote
}

export interface GradeReqGetAll {
	cstId: string;
}

export interface GradeReqGetUser {
	cstId: string;
}

export interface GradeReqGetSummary {
	cstId: string;
}

export interface GradeReqUnsubscribe {
	cstId: string;
}

export interface GradeResSummaryUpdate {
	summary: KGradeSummary;
}

export interface GradeResUserDataUpdate {
	status: "added" | "modified" | "removed";
	userData: KGradeUserData;
}