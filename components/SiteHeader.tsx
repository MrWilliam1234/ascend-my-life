// components/SiteHeader.tsx
// Top bar on every public-facing page. Logo + struck-through lie headline +
// Sign in button + Begin free CTA. Dynamic gender/theme switcher parked for later.

'use client';

type Props = {
  onSignIn: () => void;
};

export default function SiteHeader({ onSignIn }: Props) {
  return (
    <header className="site-header">
      <div className="logo">
        Ascend<em>.</em>
      </div>

      <div className="header-headline">
        <span className="strike">
          You have a discipline problem.
          <svg
            className="strike-line"
            viewBox="0 0 600 6"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M0,3 C40,1.5 120,4.5 200,2.8 C280,1.2 360,4.8 440,3.1 C510,1.8 560,3.8 600,3" />
          </svg>
        </span>
        <h1>
          You have a <span className="ac">design</span> problem.
        </h1>
      </div>

      <div className="header-right">
        <button className="hdr-chip" onClick={onSignIn}>
          Sign in
        </button>
        <button
          className="cta-nav"
          onClick={() => {
            window.location.href = '/assessment';
          }}
        >
          Begin free →
        </button>
      </div>
    </header>
  );
}
