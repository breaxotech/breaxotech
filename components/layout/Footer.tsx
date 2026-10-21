"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-primary">
          <div className="footer-brand-pane">
            <a href="#hero" className="footer-logo-link" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
              <Image
                src="/breaxo-logo.png"
                alt="Breaxo Tech"
                className="footer-logo-img"
                width={36}
                height={36}
                style={{ width: "36px", height: "36px", borderRadius: "8px", objectFit: "cover" }}
              />
              <span style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "0.05em", color: "#09090b" }}>
                BREAXO <span style={{ color: "#10b981" }}>TECH</span>
              </span>
            </a>
            <p className="footer-tagline">We find the problem. We engineer the solution.</p>
            <p className="footer-summary">
              An AI-native technology company that builds scalable web platforms, custom AI systems,
              integrations, ERPs, and cloud infrastructure.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-menu">
                <li><a href="#services">Services</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#approach">Our Approach</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Capabilities</h4>
              <ul className="footer-menu">
                <li><a href="#services">Web Platforms</a></li>
                <li><a href="#services">Custom AI Systems</a></li>
                <li><a href="#services">Integrations</a></li>
                <li><a href="#services">ERP &amp; Operations</a></li>
                <li><a href="#services">Cloud Architecture</a></li>
                <li><a href="#services">Technical Consulting</a></li>
              </ul>
            </div>

            <div className="footer-col" style={{ minWidth: "220px" }}>
              <h4 className="footer-heading">Direct Contact</h4>
              <p className="footer-contact-text">Have a project in mind or a problem to solve?</p>
              <a
                href="mailto:breaxotech.contact@gmail.com"
                className="footer-email-link font-mono"
                style={{ whiteSpace: "nowrap", display: "inline-block" }}
              >
                breaxotech.contact@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-secondary">
          <div className="footer-copy font-mono">
            &copy; {currentYear} Breaxo Tech. All rights reserved.
          </div>
          <div className="footer-disclaimer">
            Breaxo Tech — Brave engineering solutions for ambitious businesses. Built for scale, speed, and genuine operational impact.
          </div>
        </div>
      </div>
    </footer>
  );
}
