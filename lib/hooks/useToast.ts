"use client";
import { useCallback } from "react";

/**
 * Simple imperative toast helper — appends a toast to #toastContainer.
 */
export function useToast() {
  const showToast = useCallback((message: string, duration = 3800) => {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.parentNode?.removeChild(toast), 250);
    }, duration);
  }, []);

  return { showToast };
}
