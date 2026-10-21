"use client";

import { useEffect } from "react";

/**
 * Modern High-Performance Scroll Observer
 * Observes every section, card, and row individually so that on both desktop
 * and mobile screens, elements glide into place as the user scrolls.
 */
export function ScrollObserver() {
  useEffect(() => {
    // Run after DOM render
    const initObserver = () => {
      const targets = document.querySelectorAll(
        ".reveal, .reveal-scale, .capability-box, .solution-card, .process-row, .principle-card, .domain-card, .contact-meta-card, .section-intro-block, .approach-panel, .products-panel"
      );

      if (!("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-revealed"));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              // Once revealed, unobserve to free mobile CPU/GPU
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      targets.forEach((el) => {
        // Add base reveal class if not present
        if (!el.classList.contains("reveal-item")) {
          el.classList.add("reveal-item");
        }
        observer.observe(el);
      });
    };

    const timer = setTimeout(initObserver, 60);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
