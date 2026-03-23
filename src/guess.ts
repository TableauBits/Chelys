export interface Guess {
  songId: number;
  guess: string;
}

export interface GuessUserData {
  uid: string;
  guesses: Map<number, string>; // songId -> user id
}

export interface KGuessUserData {
    uid: string;
    values: Record<string, unknown>;
}

// REQUESTS / RESPONSES

export interface GradeReqEdit {
    cstId: string,
    guessData: Guess
}

export interface GradeReqGetAll {
    cstId: string;
}

export interface GradeReqGetUser {
    cstId: string;
}