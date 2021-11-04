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
}

export interface DocumentGradeUserData {
	uid: string;
	values: Record<string, unknown>;
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

export interface GradeResUserDataUpdate {
	status: "added" | "modified" | "removed";
	userData: GradeUserData;
}

export interface GradeResSummaryUpdate {
	summary: GradeSummary;
}

export interface DocumentGradeResUserDataUpdate {
	status: "added" | "modified" | "removed";
	userData: DocumentGradeUserData;
}