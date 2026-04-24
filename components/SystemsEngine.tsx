// components/SystemsEngine.tsx
// 4 example automated systems. Content from landing HTML.

'use client';

const SYSTEMS = [
  {
    domain: 'Finance',
    title: 'Auto-investment plan',
    body: 'Every payday: €200 → stocks ETF, €100 → crypto, €50 → gold, buffer stays. Auto-transfer. You never touch it. In 2 years: staggering.',
    tag: 'Automates on payday',
  },
  {
    domain: 'Body',
    title: 'Scheduled movement system',
    body: '3 workouts/week, blocked in your calendar. No decision required on the day. Show up. The system removes the "should I?" entirely.',
    tag: 'Calendar sync',
  },
  {
    domain: 'Relationships',
    title: 'Connection calendar',
    body: '4 important people. Monthly coffee pre-scheduled. Birthday reminder 2 weeks before. Relationships maintained — without thinking.',
    tag: 'Auto-scheduled',
  },
  {
    domain: 'Career',
    title: 'Deep work blocks',
    body: '2 hours every morning. No meetings. No email. One important task. AI identifies your peak hours. Guards the time.',
    tag: 'Calendar protected',
  },
];

export default function SystemsEngine() {
  return (
    <section className="sec" style={{ background: 'var(--bg)' }}>
      <div className="sec-inner">
        <div className="sec-eye">The systems engine</div>
        <h2 className="sec-h">Build it once. It works while you don&apos;t.</h2>
        <p className="sec-p">
          Every domain gets an automated system designed by AI — built around
          your income, your schedule, your goals. No decisions required once
          it&apos;s running.
        </p>
        <div className="sys-grid">
          {SYSTEMS.map((s) => (
            <div key={s.domain} className="sys-card">
              <div className="sys-domain">{s.domain}</div>
              <div className="sys-title">{s.title}</div>
              <div className="sys-body">{s.body}</div>
              <span className="sys-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
