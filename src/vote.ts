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

export interface CstGradeReqEdit {
  cstId: string,
  voteData: GradeVote
}

export interface CstGradeReqGetAll {
  cstId: string;
}

export interface CstGradeReqGetUser {
  cstId: string;
}

export interface CstGradeReqGetSummary {
  cstId: string;
}

export interface CstGradeReqUnsubscribe {
  cstId: string;
}

export interface CstGradeResUpdate {
	summary: GradeSummary;
}

export interface DocumentGradeResUserDataUpdate {
	status: "added" | "modified" | "removed";
	userData: DocumentGradeUserData;
}