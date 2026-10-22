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
