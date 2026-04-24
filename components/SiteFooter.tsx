// components/SiteFooter.tsx
// Minimal footer. Copyright + placeholder links.

'use client';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Ascend<em>.</em></span>
          <span className="footer-tag">A life operating system.</span>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="mailto:hello@ascendmylife.com">Contact</a>
        </div>
        <div className="footer-copy">
          © 2026 Ascend My Life · Built as a personal breakthrough. Now available to everyone.
        </div>
      </div>
    </footer>
  );
}
