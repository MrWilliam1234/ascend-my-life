// components/FinalCta.tsx
// The closer. "Stop chasing. Start becoming." + big CTA + trust row.

'use client';

export default function FinalCta() {
  return (
    <section
      className="sec final-cta"
      style={{
        background: 'var(--bg2)',
        textAlign: 'center',
        padding: '6rem 2.5rem',
        border: 'none',
      }}
    >
      <div className="sec-inner">
        <div className="sec-eye" style={{ marginBottom: '1.5rem' }}>
          one decision
        </div>
        <h2 className="final-h">
          Stop chasing.
          <br />
          Start becoming.
        </h2>
        <p className="final-p">
          4 minutes. Your entire life, mapped.
          <br />
          No account needed until you want to save it.
        </p>
        <button
          className="btn-p"
          style={{
            fontSize: '15px',
            padding: '16px 52px',
            display: 'block',
            margin: '0 auto 1rem',
          }}
          onClick={() => {
            window.location.href = '/assessment';
          }}
        >
          Begin my assessment →
        </button>
        <p className="final-sub">
          Free to start · €7/month for the full system · cancel anytime · keep
          your data forever
        </p>
        <div className="trust-row">
          <div className="trust-item">
            <span className="dot-sm"></span>Privacy first — your data is yours
          </div>
          <div className="trust-item">
            <span className="dot-sm"></span>No dark patterns, ever
          </div>
          <div className="trust-item">
            <span className="dot-sm"></span>The app that wants you to need it less
          </div>
        </div>
      </div>
    </section>
  );
}
