// TYPE / CONST

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

export interface GuessReqEdit {
    cstId: string,
    guessData: Guess
}

export interface GuessReqGetAll {
    cstId: string;
}

export interface GuessReqGetUser {
    cstId: string;
}

export interface GuessResGetUser {
    uid: string;
    guesses: KGuessUserData;
}

export interface GuessReqUnsubscribe {
    cstId: string;
}

export interface GuessResUserDataUpdate {
    status: "added" | "modified" | "removed";
    userData: KGuessUserData;
}