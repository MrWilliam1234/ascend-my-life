// components/PosterPreview.tsx
// Mini mockup of the physical poster + 3-tier pricing + CTA.
// Content 1-for-1 from landing HTML poster section.

'use client';

export default function PosterPreview() {
  return (
    <section className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="sec-inner">
        <div className="sec-eye">The physical poster</div>
        <div className="poster-preview">
          <div className="poster-mock">
            <div className="pm-mascot">A.</div>
            <div className="pm-inner">
              <div className="pm-header">
                <span className="pm-name">Your Name · Life Blueprint</span>
                <span className="pm-date">April 2026</span>
              </div>

              <div className="pm-score-block">
                <div className="pm-score">7.4</div>
                <div className="pm-score-label">Life score</div>
              </div>

              <div className="pm-domains">
                {['Finance', 'Body', 'Mind', 'Spirit', 'Rels', 'Career',
                  'Env', 'Creat', 'Identity', 'Time', 'Health', 'Impact']
                  .map((d) => (
                    <div key={d} className="pm-domain-mini">
                      <span>{d}</span>
                      <span className="pm-bar"><span className="pm-bar-fill" /></span>
                    </div>
                  ))}
              </div>

              <div className="pm-div" />

              <div className="pm-affirmations">
                <div>
                  <div className="pm-aff-domain">Finance</div>
                  <div className="pm-aff">
                    &ldquo;I build wealth systematically. Money works for me while I sleep.&rdquo;
                  </div>
                </div>
                <div>
                  <div className="pm-aff-domain">Body</div>
                  <div className="pm-aff">
                    &ldquo;This body is capable of more than I&apos;ve ever demanded of it.&rdquo;
                  </div>
                </div>
                <div>
                  <div className="pm-aff-domain">Mind</div>
                  <div className="pm-aff">
                    &ldquo;My mind is a tool I&apos;ve chosen to sharpen.&rdquo;
                  </div>
                </div>
              </div>

              <div className="pm-div" />

              <div className="pm-systems-block">
                <div className="pm-sys-title">Active systems</div>
                <div className="pm-sys-line">Finance — €350/mo auto-invest · every payday · running</div>
                <div className="pm-sys-line">Body — 3 sessions/week · Monday · Wednesday · Saturday</div>
                <div className="pm-sys-line">Mind — 10min journal · 07:00 daily · 47 day streak</div>
              </div>

              <div className="pm-compound">
                &ldquo;If your current systems run for 1 year: €4,200 invested ·
                body fat −8% · 365 journal entries.&rdquo;
              </div>

              <div className="pm-footer">
                <span className="pm-brand">Ascend My Life</span>
                <svg className="pm-qr" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="8" height="8" rx="1" stroke="#1A1208" strokeWidth="1.2" fill="none" />
                  <rect x="3" y="3" width="4" height="4" fill="#1A1208" />
                  <rect x="11" y="1" width="8" height="8" rx="1" stroke="#1A1208" strokeWidth="1.2" fill="none" />
                  <rect x="13" y="3" width="4" height="4" fill="#1A1208" />
                  <rect x="1" y="11" width="8" height="8" rx="1" stroke="#1A1208" strokeWidth="1.2" fill="none" />
                  <rect x="3" y="13" width="4" height="4" fill="#1A1208" />
                  <rect x="11" y="11" width="2" height="2" fill="#1A1208" />
                  <rect x="14" y="11" width="2" height="2" fill="#1A1208" />
                  <rect x="17" y="11" width="2" height="2" fill="#1A1208" />
                  <rect x="11" y="14" width="2" height="2" fill="#1A1208" />
                  <rect x="14" y="17" width="2" height="2" fill="#1A1208" />
                </svg>
              </div>
            </div>
          </div>
          <div className="poster-text">
            <h3>Your journey, off the screen and onto your wall.</h3>
            <p>
              Generated from your assessment, vision board, affirmations, domain
              scores, and systems. Every poster is unique. Every poster is personal.
              Every poster that gets photographed and shared is an ad you didn&apos;t
              pay for.
            </p>
            <div className="poster-prices">
              <div className="pp">
                <strong>Digital PDF</strong>
                <span className="pp-price">€9</span>
                <br />300dpi · instant
              </div>
              <div className="pp">
                <strong>A2 Poster</strong>
                <span className="pp-price">€29</span>
                <br />Matte · ships in 5–7 days
              </div>
              <div className="pp">
                <strong>A1 Premium</strong>
                <span className="pp-price">€49</span>
                <br />Heavyweight · frame option
              </div>
            </div>
            <button
              className="btn-p"
              onClick={() => {
                window.location.href = '/assessment';
              }}
            >
              Begin assessment to generate yours →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
