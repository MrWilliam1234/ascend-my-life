// components/UspSection.tsx
// The 6 differentiators. Content taken 1-for-1 from landing HTML.

'use client';

const USPS = [
  {
    num: '01',
    title: 'Systems, not discipline',
    body: "Discipline gets tired. Systems run. We don't ask you to try harder — we build automated architecture for every domain of your life.",
  },
  {
    num: '02',
    title: 'The Shadow Layer',
    body: "AI that finds your self-sabotage loops before you can see them. \"You abandon things after 11 days.\" Named. Faced. Dissolved slowly.",
  },
  {
    num: '03',
    title: 'Before & After Vision Board',
    body: 'Real photos. Personal affirmations. AI-generated future-self images. Per domain. The emotional core the product was built around.',
  },
  {
    num: '04',
    title: 'Anti-dopamine design',
    body: 'We openly want you to use this app less over time. Presence-first. Tolle energy, not TikTok energy. The only app that wants to make itself obsolete.',
  },
  {
    num: '05',
    title: 'It feels like a journal',
    body: 'Warm paper texture. Ink. Serif type. Ruled lines. Like writing in a beautiful hardcover book. The feel is the product.',
  },
  {
    num: '06',
    title: 'Your life, on your wall',
    body: 'Order your personal life blueprint as a physical poster. Generated from your data. Shipped to your door. The app becomes real-world.',
  },
];

export default function UspSection() {
  return (
    <section className="sec" style={{ background: 'var(--bg2)' }}>
      <div className="sec-inner">
        <div className="sec-eye">Why this is different</div>
        <h2 className="sec-h">What makes Ascend impossible to copy</h2>
        <div className="usp-grid">
          {USPS.map((usp) => (
            <div key={usp.num} className="usp-card">
              <div className="usp-num">{usp.num}</div>
              <div className="usp-title">{usp.title}</div>
              <div className="usp-body">{usp.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
