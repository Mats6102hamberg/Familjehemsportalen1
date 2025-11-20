/**
 * Konstanter för hela applikationen
 * Centraliserar magiska strängar och konfigurationsvärden
 */

// Cookie-namn
export const COOKIE_NAMES = {
  AUTH: "fhp_auth",
} as const;

// LocalStorage-nycklar för NotePad
export const STORAGE_KEYS = {
  MATS_PLANNING: "fhp_mats_infor_nasta",
  MATS_REFLECTION: "fhp_mats_efter_tillfalle",
  MATS_PATTERNS: "fhp_mats_over_tid",
  MATS_EXERCISES: "fhp_mats_ovningar_att_testa",
  MATS_REMINDERS: "fhp_mats_paminnelse_nasta",
  MATS_IDEAS: "fhp_mats_idebank",
  MATS_ENERGY: "fhp_mats_egen_energi",
} as const;

// AI-lägen
export const AI_MODES = {
  HRV: "hrv",
  GENERAL: "general",
} as const;

// Navigeringslänkar
export const NAV_LINKS = [
  { href: "/", label: "Hem" },
  { href: "/akut", label: "Akut stöd" },
  { href: "/verktyg", label: "Verktyg" },
  { href: "/kunskap", label: "Kunskapsbank" },
  { href: "/case", label: "Case" },
  { href: "/motesammanfattning", label: "Mötes\u00adsammanfattning" },
  { href: "/hallbarhet", label: "Egen hållbarhet" },
  { href: "/vardegrund", label: "Värdegrund" },
] as const;
