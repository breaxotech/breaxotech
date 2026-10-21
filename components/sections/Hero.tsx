import React from "react";

export function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content reveal is-revealed">
          <div className="section-kicker">
            <span className="status-live-dot"></span>
            <span>AI-NATIVE IT &amp; SOFTWARE ENGINEERING</span>
          </div>

          <h1 className="hero-title">
            Your Problem.<br />
            <span className="text-pure-black">Our Engineering.</span>
          </h1>

          <p className="hero-summary">
            Breaxo Tech is an AI-native technology company building custom enterprise software.
            Our team works with you to understand the problem, engineer the right solution, and turn ideas into
            working technology.
          </p>

          <div className="hero-supporting-callout glass-panel">
            <p>Scalable Web Platforms · Custom AI Systems · Integrations · ERPs · Cloud Architecture</p>
          </div>

          <div className="hero-cta-row">
            <a href="#contact" className="btn btn-black btn-lg">
              <span>Discuss Your Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#services" className="btn btn-secondary btn-lg">
              <span>Explore Services</span>
            </a>
          </div>

          <div className="hero-metric-bar glass-card reveal-scale is-revealed">
            <div className="metric-block">
              <span className="metric-caption">Core Focus</span>
              <span className="metric-val">Enterprise &amp; AI Systems</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric-block">
              <span className="metric-caption">Architecture</span>
              <span className="metric-val">Scalable, Resilient &amp; Modern</span>
            </div>
            <div className="metric-sep"></div>
            <div className="metric-block">
              <span className="metric-caption">Engineering Standard</span>
              <span className="metric-val">Production-Grade Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
