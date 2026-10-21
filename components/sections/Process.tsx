import React from "react";

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-kicker reveal">
          <span className="status-live-dot"></span>
          <span>HOW IT WORKS</span>
        </div>
        <div className="section-intro-block reveal">
          <h2 className="section-heading">From Problem to Production</h2>
          <p className="section-subtext">
            A straightforward process that takes your project from initial conversation to working software.
          </p>
        </div>

        <div className="process-sequence reveal-stagger">
          {/* Step 1 */}
          <div className="process-row glass-card">
            <div className="process-step-num font-mono">01</div>
            <div className="process-step-content">
              <h3 className="process-step-title">Understand the Problem</h3>
              <p className="process-step-text">
                We sit down with your team and figure out what's actually going wrong, what's missing,
                or what needs to be built. No templates — just honest technical conversation.
              </p>
              <div className="process-step-tags">
                <span className="step-tag">Deep Dive</span>
                <span className="step-tag">Identify Bottlenecks</span>
                <span className="step-tag">Define Scope</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-row glass-card">
            <div className="process-step-num font-mono">02</div>
            <div className="process-step-content">
              <h3 className="process-step-title">Plan the Architecture</h3>
              <p className="process-step-text">
                We pick the right stack, design the data model, and map out how everything connects —
                APIs, databases, services, and third-party tools.
              </p>
              <div className="process-step-tags">
                <span className="step-tag">Tech Stack Selection</span>
                <span className="step-tag">System Design</span>
                <span className="step-tag">Integration Mapping</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-row glass-card">
            <div className="process-step-num font-mono">03</div>
            <div className="process-step-content">
              <h3 className="process-step-title">Build &amp; Iterate</h3>
              <p className="process-step-text">
                We build fast, ship working versions early, and refine based on real feedback.
                You see progress every week, not after three months.
              </p>
              <div className="process-step-tags">
                <span className="step-tag">Weekly Deliverables</span>
                <span className="step-tag">Real-Time Feedback</span>
                <span className="step-tag">Clean Code</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-row glass-card">
            <div className="process-step-num font-mono">04</div>
            <div className="process-step-content">
              <h3 className="process-step-title">Deploy &amp; Deliver</h3>
              <p className="process-step-text">
                We test everything, handle the deployment, write the docs, and make sure
                your team can run it from day one.
              </p>
              <div className="process-step-tags">
                <span className="step-tag">Production Deployment</span>
                <span className="step-tag">Security Testing</span>
                <span className="step-tag">Full Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
