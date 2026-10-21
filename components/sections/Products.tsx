import React from "react";

export function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <div className="products-panel glass-card reveal">
          <div className="products-copy">
            <div className="section-kicker">
              <span className="status-live-dot"></span>
              <span>OUR PRODUCTS</span>
            </div>
            <h2 className="section-heading">Tools We're Building</h2>
            <p className="products-lead">
              Alongside client work, we build our own software products — AI-powered tools and
              developer utilities born from real engineering problems we've encountered.
            </p>
            <div className="products-honesty-note glass-subcard">
              <div className="note-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <p>
                <strong>Transparency:</strong> These are real projects in active development.
                No inflated metrics, no fake user counts.
              </p>
            </div>
          </div>

          <div className="products-domains reveal-stagger">
            <div className="domain-card glass-subcard">
              <div className="domain-status font-mono">In Development</div>
              <h4>Workflow Diagnostics Engine</h4>
              <p>
                Automated tooling that identifies operational bottlenecks and integration failures
                across business applications.
              </p>
            </div>
            <div className="domain-card glass-subcard">
              <div className="domain-status font-mono">In Development</div>
              <h4>API Consistency Validator</h4>
              <p>
                Testing framework for verifying data consistency across multi-service architectures
                and third-party integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
