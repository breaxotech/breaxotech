"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  activeSection?: string;
}

export function Navbar({ activeSection = "hero" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="dynamic-island-wrapper" id="header">
      <div className="dynamic-island">
        <a href="#hero" className="island-brand" aria-label="Breaxo Tech Home" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
          <Image
            src="/breaxo-logo.png"
            alt="Breaxo Tech"
            width={32}
            height={32}
            className="island-logo-img"
            style={{ width: "32px", height: "32px", borderRadius: "8px", objectFit: "cover" }}
            priority
          />
          <span style={{ fontWeight: 800, fontSize: "0.92rem", letterSpacing: "0.04em", color: "var(--text-primary)" }}>
            BREAXO <span style={{ color: "#10b981" }}>TECH</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a
                href="#services"
                className={`nav-link ${activeSection === "services" ? "active" : ""}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className={`nav-link ${activeSection === "solutions" ? "active" : ""}`}
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#approach"
                className={`nav-link ${activeSection === "approach" ? "active" : ""}`}
              >
                Our Approach
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={`nav-link ${activeSection === "process" ? "active" : ""}`}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#products"
                className={`nav-link ${activeSection === "products" ? "active" : ""}`}
              >
                Products
              </a>
            </li>
          </ul>
        </nav>

        <div className="island-actions">
          <a href="#contact" className="btn-black-pill">
            Book a call
          </a>
          <button
            id="mobileMenuBtn"
            className={`mobile-toggle ${mobileOpen ? "active" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Floating Glass Drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? "active" : ""}`}
        id="mobileDrawer"
        aria-hidden={!mobileOpen}
        style={{ display: mobileOpen ? "block" : "none" }}
      >
        <ul className="mobile-nav-list">
          <li>
            <a
              href="#services"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Solutions
            </a>
          </li>
          <li>
            <a
              href="#approach"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Our Approach
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </a>
          </li>
          <li className="mobile-cta-item">
            <a
              href="#contact"
              className="btn btn-black btn-block"
              onClick={() => setMobileOpen(false)}
            >
              Book a call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
