"use client";

import { MeetingSummary } from "@/components/MeetingSummary";
import { ToastProvider } from "@/components/ToastProvider";

export default function MeetingSummaryStandalonePage() {
  return (
    <ToastProvider>
      <MeetingSummary />
    </ToastProvider>
  );
}
