import React from "react";

export function Solutions() {
  return (
    <section className="section solutions-section" id="solutions">
      <div className="container">
        <div className="section-kicker reveal">
          <span className="status-live-dot"></span>
          <span>HOW WE SOLVE IT</span>
        </div>
        <div className="section-intro-block reveal">
          <h2 className="section-heading">Your Problem. Built to Spec.</h2>
          <p className="section-subtext">
            Every business runs differently. We don't force you into a template — we study how your operations
            actually work and build software that fits.
          </p>
        </div>

        <div className="solutions-grid reveal-stagger">
          {/* Solution Card 1 */}
          <div className="solution-card glass-card">
            <span className="solution-badge font-mono">Custom Software</span>
            <h3>Built Around Your Operations</h3>
            <p>
              Whether you need an internal management tool, a customer-facing platform, or a full operational
              system — we build it from scratch, tailored to your workflows and your data.
            </p>
            <ul className="solution-feature-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>No rigid templates or per-seat licensing</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Works with your existing tools and databases</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Scales as your team and business grow</span>
              </li>
            </ul>
          </div>

          {/* Solution Card 2 */}
          <div className="solution-card glass-card">
            <span className="solution-badge font-mono">AI Integration</span>
            <h3>AI That Works in Your Business Flow</h3>
            <p>
              We set up AI where it actually makes a difference — automating repetitive tasks, processing documents,
              routing decisions, and cutting hours of manual work from your daily operations.
            </p>
            <ul className="solution-feature-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Automate document processing &amp; data extraction</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Custom AI agents for your specific workflows</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Secure, private — your data stays yours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
