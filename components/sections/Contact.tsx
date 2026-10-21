"use client";

import React, { useState } from "react";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/lib/hooks/useToast";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    const success = await copyToClipboard("breaxotech.contact@gmail.com");
    if (success) {
      setCopied(true);
      showToast("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-info-pane reveal">
          <div className="section-kicker">
            <span className="status-live-dot"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-heading">Contact Us</h2>
          <p className="contact-subheading">
            Reach out directly via email to discuss your engineering needs or explore a collaboration.
          </p>

          <div className="contact-meta-card glass-card reveal-scale">
            <div className="meta-item">
              <span className="meta-label">Direct Email</span>
              <div className="meta-email-wrap">
                <a
                  href="mailto:breaxotech.contact@gmail.com"
                  className="meta-email font-mono"
                >
                  breaxotech.contact@gmail.com
                </a>
                <button
                  type="button"
                  className="btn-copy"
                  id="copyEmailBtn"
                  title="Copy email address"
                  aria-label="Copy email address"
                  onClick={handleCopy}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
