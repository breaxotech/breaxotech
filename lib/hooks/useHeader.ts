"use client";
import { useEffect, useState } from "react";

/**
 * Returns true when the user has scrolled past the threshold (default 15px).
 */
export function useHeader(threshold = 15): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);

  return scrolled;
}
