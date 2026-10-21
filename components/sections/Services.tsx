import React from "react";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-kicker reveal">
          <span className="status-live-dot"></span>
          <span>CAPABILITIES &amp; IT SERVICES</span>
        </div>
        <div className="section-intro-block reveal">
          <h2 className="section-heading">What We Build</h2>
          <p className="section-subtext">
            We work with you to understand what's broken, what's missing, or what needs to scale —
            then we build the right system for it.
          </p>
        </div>

        <div className="capabilities-grid reveal-stagger">
          {/* 1. Scalable Web Platforms */}
          <div className="capability-box glass-card" id="cap-web">
            <div className="box-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <h3 className="box-title">Scalable Web Platforms</h3>
            <p className="box-desc">
              Web applications, SaaS products, customer portals, and internal tools — built to handle real traffic
              and real business logic.
            </p>
            <div className="box-points font-mono">
              <span>• Full-Stack Web Applications</span>
              <span>• Customer-Facing Portals</span>
              <span>• Real-Time Dashboards</span>
            </div>
          </div>

          {/* 2. Custom AI Systems */}
          <div className="capability-box glass-card" id="cap-ai">
            <div className="box-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                <path d="M12 12L2.5 7.5" />
              </svg>
            </div>
            <h3 className="box-title">Custom AI Systems</h3>
            <p className="box-desc">
              AI agents, document intelligence, automated workflows, and LLM integrations that actually solve
              problems in your day-to-day operations.
            </p>
            <div className="box-points font-mono">
              <span>• AI Agents &amp; Automation</span>
              <span>• Document Processing &amp; Extraction</span>
              <span>• Private LLM Deployments</span>
            </div>
          </div>

          {/* 3. Integrations & Data Sync */}
          <div className="capability-box glass-card" id="cap-integration">
            <div className="box-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M18 9a9 9 0 0 1-9 9" />
              </svg>
            </div>
            <h3 className="box-title">Integrations &amp; Data Sync</h3>
            <p className="box-desc">
              Connect your tools, databases, and third-party services into one coherent system.
              Eliminate manual data entry and broken handoffs.
            </p>
            <div className="box-points font-mono">
              <span>• API &amp; Webhook Pipelines</span>
              <span>• Legacy System Migration</span>
              <span>• Cross-Platform Data Sync</span>
            </div>
          </div>

          {/* 4. ERP & Business Operations */}
          <div className="capability-box glass-card" id="cap-erp">
            <div className="box-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="box-title">ERP &amp; Business Operations</h3>
            <p className="box-desc">
              Custom operational platforms — inventory, invoicing, order management, HR workflows — built
              to fit how your business actually runs.
            </p>
            <div className="box-points font-mono">
              <span>• Custom Business Logic</span>
              <span>• Workflow Automation</span>
              <span>• Role-Based Access Control</span>
            </div>
          </div>

          {/* 5. Cloud Architecture */}
          <div className="capability-box glass-card" id="cap-cloud">
            <div className="box-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <h3 className="box-title">Cloud Architecture</h3>
            <p className="box-desc">
              Infrastructure that scales with your product. APIs, microservices, databases, and deployment
              pipelines designed for reliability.
            </p>
            <div className="box-points font-mono">
              <span>• Cloud-Native Infrastructure</span>
              <span>• High-Availability APIs</span>
              <span>• CI/CD &amp; DevOps Pipelines</span>
            </div>
          </div>

          {/* 6. Technical Consulting */}
          <div className="capability-box glass-card" id="cap-consulting">
            <div className="box-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <h3 className="box-title">Technical Consulting</h3>
            <p className="box-desc">
              Not sure where to start? We audit your current systems, identify bottlenecks,
              and map a practical engineering path forward.
            </p>
            <div className="box-points font-mono">
              <span>• System Audits &amp; Reviews</span>
              <span>• Performance Optimization</span>
              <span>• Scalability Planning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
