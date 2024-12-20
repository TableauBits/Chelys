// TYPE / CONST

import { GradeState, ResponseStatus } from ".";

export const OWNER_INDEX = 0;

export enum ConstitutionType {
    GRADE,
    LENGTH
}

export enum AnonymousLevel {
    PUBLIC,
    NO_USERNAME,
    SOUND_ONLY
}

export interface Constitution {
    id: string;
    season: number;
    part: number;
    name: string;
    isPublic: boolean;
    anonymousLevel: AnonymousLevel;
    type: ConstitutionType;
    state: number;
    playlistLink: string;
    users: string[];                // user[0] as owner
    maxUserCount: number;
    numberOfSongsPerUser: number;
    startDate?: string;
    endDate?: string;
    maxGrade?: number;
    judges?: string[];
}

export const EMPTY_CONSTITUTION: Constitution = {
    id: '',
    name: '',
    season: -1,
    part: -1,
    isPublic: false,
    anonymousLevel: AnonymousLevel.PUBLIC,
    maxUserCount: -1,
    type: ConstitutionType.GRADE,
    state: -1,
    numberOfSongsPerUser: -1,
    playlistLink: '',
    users: []
}

// FUNCTION

export function canModifySongs(constitution: Constitution): boolean {
    switch (constitution.type) {
        case ConstitutionType.GRADE: return constitution.state === GradeState.SONG_ADD;

        default:
            return false;
    }
}

export function canModifyVotes(constitution: Constitution): boolean {
    switch (constitution.type) {
        case ConstitutionType.GRADE: return constitution.state <= GradeState.VOTING;

        default:
            return false;
    }
}

export function areResultsPublic(constitution: Constitution): boolean {
    switch (constitution.type) {
        case ConstitutionType.GRADE: return constitution.state === GradeState.RESULTS;

        default:
            return false;
    }
}

// REQUESTS / RESPONSES

export interface CstReqGet {
    ids: string[];
}

export interface CstReqCreate {
    cstData: Constitution;
}

export interface CstReqJoin {
    id: string;
}

export interface CstReqState {
    state: number;
    id: string;
}

export interface CstReqNameURL {
    id: string;
    name: string | undefined;
    url: string | undefined;
}

export interface CstReqUnsubscribe {
    ids: string[];
}

export interface CstResUpdate {
    cstInfo: Constitution;
}

export type CstReqGetFromUser = {}

export interface CstReqUpdateState {
    id: string;
    newState: number;
}

export interface CstResJoin {
    status: ResponseStatus;
}

export interface CstReqDelete {
    id: string;
}

export interface CstResDelete {
    id: string;
}