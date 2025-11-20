/**
 * TypeScript-typer för mötesanteckningar och case-sammanfattningar
 */

export interface MeetingNote {
  id?: string;
  datum: string;
  plats: string;
  barnkod: string;
  narvarande: string;
  syfte: string;
  punkter: string;
  atgarder: string;
  uppfoljningsdatum: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CaseSummary {
  id?: string;
  arendekod: string;
  datum: string;
  barnkod: string;
  bakgrund: string;
  nuvarandeLage: string;
  styrkor: string;
  oro: string;
  planFramat: string;
  createdAt?: string;
  updatedAt?: string;
}

// Tomma initiala värden
export const emptyMeetingNote: MeetingNote = {
  datum: "",
  plats: "",
  barnkod: "",
  narvarande: "",
  syfte: "",
  punkter: "",
  atgarder: "",
  uppfoljningsdatum: "",
};

export const emptyCaseSummary: CaseSummary = {
  arendekod: "",
  datum: "",
  barnkod: "",
  bakgrund: "",
  nuvarandeLage: "",
  styrkor: "",
  oro: "",
  planFramat: "",
};
