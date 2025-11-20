/**
 * Delade TypeScript-typer för hela applikationen
 */

// AI Chat typer
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AssistantRequest {
  mode: "hrv" | "general";
  messages: ChatMessage[];
}

export interface AssistantResponse {
  reply: string;
  error?: string;
}

// Dashboard typer
export interface DashboardCard {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

// NotePad typer
export interface NotePadProps {
  title: string;
  storageKey: string;
  placeholder?: string;
}

// Akut Modal typer
export interface AkutSituation {
  id: number;
  title: string;
  aiPrompt: string;
  steps: string[];
}
