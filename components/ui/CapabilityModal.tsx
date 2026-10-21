"use client";

import React, { useEffect } from "react";
import { CloseIcon, ArrowRight, CheckIcon } from "./Icons";

export interface ModalCapabilityData {
  title: string;
  category: string;
  description: string;
  points: string[];
  architecture: string[];
  deliverables: string[];
}

interface CapabilityModalProps {
  data: ModalCapabilityData | null;
  onClose: () => void;
}

export function CapabilityModal({ data, onClose }: CapabilityModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="modal active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <CloseIcon />
        </button>

        <div className="modal-header">
          <span className="badge">{data.category}</span>
          <h3 id="modal-title" style={{ marginTop: "1rem", fontSize: "1.75rem", fontWeight: 700 }}>
            {data.title}
          </h3>
          <p style={{ marginTop: "0.5rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
            {data.description}
          </p>
        </div>

        <div className="modal-body" style={{ marginTop: "1.5rem" }}>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
            Key Architecture & Capabilities
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "grid", gap: "0.6rem" }}>
            {data.points.map((pt, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.95rem", color: "var(--text-primary)" }}>
                <span style={{ color: "var(--color-primary)", marginTop: "2px", flexShrink: 0 }}>
                  <CheckIcon />
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <h4 style={{ fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.75rem" }}>
            Technical Scope & Deliverables
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {data.deliverables.map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.825rem",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "9999px",
                  background: "var(--bg-card-alt)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-mono, monospace)"
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "1rem", borderTop: "1px solid var(--border-color)" }}>
            <a
              href="#contact"
              onClick={onClose}
              className="btn btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              Discuss This Architecture <ArrowRight />
            </a>
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
