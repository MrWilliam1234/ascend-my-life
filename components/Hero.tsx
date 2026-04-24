// components/Hero.tsx
// Hero · STATIC VERSION. Copy from landing HTML hero-bubble + journey quote.
// The interactive journey slider + canvas mascot + live stat counters
// are parked for a future session. Replaced here with a calm static visual.

'use client';

export default function Hero() {
  const go = () => {
    window.location.href = '/assessment';
  };

  return (
    <section className="hero">
      <div className="canvas-wrapper">
        <div className="canvas-bubble">
          <div className="cb-eyebrow">right now · your life, mapped</div>
          <div className="cb-headline">
            This is you.
            <br />
            There&apos;s a gap.
          </div>
          <div className="cb-body">
            4 minutes. 12 domains of your life, scored. Your archetype.
            Your systems. Your blueprint.
          </div>
          <button className="cb-cta" onClick={go}>
            Map my life free →
          </button>
          <div className="cb-sub">4 min · no account needed · free forever</div>
        </div>

        <div className="ascend-block">
          <div className="journey-section">
            <p className="journey-quote">
              &ldquo;This is where most people stay. The gap between here and
              what&apos;s possible is the cost of your current system.&rdquo;
            </p>
            <div className="journey-static">
              <div className="journey-road"></div>
              <div className="journey-milestone"><span>Now</span></div>
              <div className="journey-milestone"><span>3 mo</span></div>
              <div className="journey-milestone"><span>1 yr</span></div>
              <div className="journey-milestone"><span>3 yr</span></div>
              <div className="journey-milestone"><span>10 yr</span></div>
            </div>
            <p className="journey-hint">
              Interactive journey coming soon — for now, begin with the assessment.
            </p>
          </div>

          <div className="canvas-section-static">
            <div className="mascot-static">
              <div className="mascot-emoji">🌱</div>
              <div className="mascot-caption">your future self · waiting</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-n" style={{ color: 'var(--acc)' }}>12</div>
          <div className="stat-l">Life domains</div>
        </div>
        <div className="stat">
          <div className="stat-n">36</div>
          <div className="stat-l">Archetypes</div>
        </div>
        <div className="stat">
          <div className="stat-n">4 min</div>
          <div className="stat-l">To your map</div>
        </div>
      </div>

      <div className="hero-cta">
        <button className="btn-p" onClick={go}>
          Map my life free →
        </button>
        <button
          className="btn-s"
          onClick={() => {
            document
              .querySelector('.domain-teaser')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          How it works
        </button>
      </div>
      <div className="proof">
        <span className="dot-acc"></span>Free to start · 4 minutes · No account
        needed until you want to save
      </div>
    </section>
  );
}
