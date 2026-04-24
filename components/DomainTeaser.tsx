// components/DomainTeaser.tsx
// Shows ONE domain in full detail (checklist, affirmation, states) with the
// other 11 blurred behind. This is the preview pattern — same component used
// on Score Reveal later (step 06).

'use client';

const DOMAINS = [
  { key: 'finance', name: 'Finance',       color: '#C4722A', states: ['Struggling', 'Aware', 'Saving', 'Investing', 'Wealthy'] },
  { key: 'body',    name: 'Body',          color: '#2a8a3a', states: ['Sedentary', 'Moving', 'Training', 'Athletic', 'Peak'] },
  { key: 'mind',    name: 'Mind',          color: '#2a5acc', states: ['Chaos', 'Noisy', 'Focused', 'Clear', 'Still'] },
  { key: 'spirit',  name: 'Spirit',        color: '#7a3acc', states: ['Lost', 'Searching', 'Aware', 'Connected', 'Whole'] },
  { key: 'rels',    name: 'Relationships', color: '#cc2a7a', states: ['Isolated', 'Guarded', 'Open', 'Loving', 'Bonded'] },
  { key: 'career',  name: 'Career',        color: '#0a8a5a', states: ['Drifting', 'Working', 'Growing', 'Leading', 'Mastery'] },
  { key: 'env',     name: 'Environment',   color: '#6a6a2a', states: ['Chaos', 'Messy', 'Tidy', 'Calm', 'Sanctuary'] },
  { key: 'creat',   name: 'Creativity',    color: '#cc4a1a', states: ['Blocked', 'Dabbling', 'Creating', 'Flowing', 'Genius'] },
  { key: 'identity',name: 'Identity',      color: '#4a2acc', states: ['Confused', 'Searching', 'Aware', 'Grounded', 'Sovereign'] },
  { key: 'time',    name: 'Time',          color: '#0a5acc', states: ['Wasted', 'Busy', 'Structured', 'Intentional', 'Present'] },
  { key: 'health',  name: 'Health',        color: '#0a8a2a', states: ['Declining', 'Surviving', 'Stable', 'Thriving', 'Optimal'] },
  { key: 'impact',  name: 'Impact',        color: '#0a6a6a', states: ['None', 'Local', 'Community', 'Wide', 'Legacy'] },
];

type Props = {
  focusKey?: string;
};

export default function DomainTeaser({ focusKey = 'body' }: Props) {
  const focusIndex = DOMAINS.findIndex(d => d.key === focusKey);
  const focus = DOMAINS[focusIndex] ?? DOMAINS[0];

  return (
    <section className="sec domain-teaser" style={{ background: 'var(--bg)' }}>
      <div className="sec-inner">
        <div className="sec-eye">12 domains of a complete life</div>
        <h2 className="sec-h">Your life, on one page.</h2>
        <p className="sec-p">
          One domain in focus. The rest waiting. Every domain gets its score,
          its affirmation, its automated system, its before/after photos —
          all generated from your data.
        </p>

        <div className="teaser-board">
          {/* the focus card — big, sharp */}
          <div
            className="teaser-focus"
            style={{ borderColor: focus.color }}
          >
            <div className="tf-header">
              <span
                className="tf-dot"
                style={{ background: focus.color }}
              />
              <span className="tf-name">{focus.name}</span>
              <span className="tf-score">7.2</span>
            </div>
            <div className="tf-states">
              {focus.states.map((state, i) => (
                <span
                  key={state}
                  className={`tf-state ${i === 3 ? 'tf-state-active' : ''}`}
                  style={
                    i === 3
                      ? { background: focus.color, color: 'white' }
                      : undefined
                  }
                >
                  {state}
                </span>
              ))}
            </div>
            <div className="tf-aff">
              <span className="tf-aff-label">Affirmation</span>
              <p>
                &ldquo;This {focus.name.toLowerCase()} is capable of more than
                I&apos;ve ever demanded of it.&rdquo;
              </p>
            </div>
            <div className="tf-sys">
              <span className="tf-sys-label">Active system</span>
              <p>3 sessions / week · Mon · Wed · Sat · scheduled automatically</p>
            </div>
            <div className="tf-check">
              <span className="tf-check-label">Daily · Weekly · Monthly checkpoints</span>
              <ul>
                <li>Morning mobility · 10 min</li>
                <li>Protein with every meal</li>
                <li>Sunday progress photo</li>
                <li>Monthly state review</li>
              </ul>
            </div>
          </div>

          {/* the blurred grid behind */}
          <div className="teaser-blurred">
            {DOMAINS.filter((_, i) => i !== focusIndex)
              .slice(0, 11)
              .map((d) => (
                <div
                  key={d.key}
                  className="teaser-blur-card"
                  style={{ borderColor: d.color }}
                >
                  <span
                    className="tbc-dot"
                    style={{ background: d.color }}
                  />
                  <span className="tbc-name">{d.name}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="teaser-cta-row">
          <p className="teaser-note">
            12 domains · one blueprint · generated from your assessment
          </p>
          <button
            className="btn-s"
            onClick={() => {
              window.location.href = '/poster';
            }}
          >
            See the full digital poster →
          </button>
        </div>
      </div>
    </section>
  );
}
