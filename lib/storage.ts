/**
 * localStorage-hantering för arbetsbord
 */

import { MeetingNote, CaseSummary } from "@/types/notes";

const STORAGE_KEYS = {
  MEETING_NOTE: "fhp_arbetsbord_meeting_note",
  CASE_SUMMARY: "fhp_arbetsbord_case_summary",
} as const;

// Mötesanteckningar
export function loadMeetingNote(): MeetingNote | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.MEETING_NOTE);
    if (!stored) return null;
    return JSON.parse(stored) as MeetingNote;
  } catch (error) {
    console.error("Fel vid laddning av mötesanteckning:", error);
    return null;
  }
}

export function saveMeetingNote(note: MeetingNote): void {
  if (typeof window === "undefined") return;

  try {
    const toSave = {
      ...note,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.MEETING_NOTE, JSON.stringify(toSave));
  } catch (error) {
    console.error("Fel vid sparande av mötesanteckning:", error);
  }
}

// Case-sammanfattningar
export function loadCaseSummary(): CaseSummary | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CASE_SUMMARY);
    if (!stored) return null;
    return JSON.parse(stored) as CaseSummary;
  } catch (error) {
    console.error("Fel vid laddning av case-sammanfattning:", error);
    return null;
  }
}

export function saveCaseSummary(summary: CaseSummary): void {
  if (typeof window === "undefined") return;

  try {
    const toSave = {
      ...summary,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.CASE_SUMMARY, JSON.stringify(toSave));
  } catch (error) {
    console.error("Fel vid sparande av case-sammanfattning:", error);
  }
}

// Rensa data
export function clearWorkspace(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEYS.MEETING_NOTE);
  localStorage.removeItem(STORAGE_KEYS.CASE_SUMMARY);
}
