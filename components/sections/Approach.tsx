import React from "react";

export function Approach() {
  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        <div className="section-kicker reveal">
          <span className="status-live-dot"></span>
          <span>OUR APPROACH</span>
        </div>

        <div className="approach-header reveal">
          <h2 className="section-heading">
            Problem First.<br />
            <span className="text-pure-black">Then Engineering.</span>
          </h2>
          <p className="section-subtext">
            We start by understanding what's actually going wrong. Then we design and build the simplest
            system that solves it — nothing more, nothing less.
          </p>
        </div>

        <div className="approach-panel glass-card reveal">
          <h3 className="approach-headline">How We Work With You</h3>
          <p className="approach-explanation">
            You talk directly to the engineers building your system. No middlemen, no drawn-out discovery phases,
            no unnecessary complexity. We move fast and build things that work.
          </p>

          <div className="principles-row reveal-stagger">
            <div className="principle-card glass-subcard">
              <div className="principle-index font-mono">01</div>
              <h4>Talk to the Engineers</h4>
              <p>
                You work directly with the people writing the code. No sales layers,
                no account managers translating your requirements.
              </p>
            </div>

            <div className="principle-card glass-subcard">
              <div className="principle-index font-mono">02</div>
              <h4>Simplest Path That Works</h4>
              <p>
                We pick the most direct technical strategy. No overengineering,
                no unnecessary abstractions, no bloated architectures.
              </p>
            </div>

            <div className="principle-card glass-subcard">
              <div className="principle-index font-mono">03</div>
              <h4>Ship It Production-Ready</h4>
              <p>
                Everything we deliver is tested, secure, documented, and ready
                for real users — not a prototype you have to finish yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
