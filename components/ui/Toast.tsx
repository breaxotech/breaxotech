"use client";

import React from "react";
import { CheckIcon } from "./Icons";

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 text-white shadow-2xl border border-slate-700/60 backdrop-blur-md animate-fade-in text-sm font-medium"
      style={{
        boxShadow: "0 20px 35px -10px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      }}
    >
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
        <CheckIcon width={13} height={13} />
      </span>
      <span>{message}</span>
    </div>
  );
}
