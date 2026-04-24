// app/layout.tsx
// Root layout. Wraps entire app in the ascend-sheet paper frame
// with masking tape in 4 corners. Journal mood by default.

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ascend My Life',
  description:
    'Je hebt geen discipline-probleem. Je hebt een design-probleem. 4 minuten. 12 levensdomeinen. Jouw blueprint.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="m-journal">
        <FlagSprite />
        <div className="ascend-sheet">
          <div className="tape tape-tl"></div>
          <div className="tape tape-tr"></div>
          <div className="tape tape-bl"></div>
          <div className="tape tape-br"></div>
          <div className="sheet-inner">{children}</div>
        </div>
      </body>
    </html>
  );
}

/** Inline SVG sprite for language flags — referenced via <use href="#flag-*"/> */
function FlagSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'none' }}
      aria-hidden="true"
    >
      <symbol id="flag-nl" viewBox="0 0 9 6">
        <rect width="9" height="2" fill="#AE1C28" />
        <rect y="2" width="9" height="2" fill="#fff" />
        <rect y="4" width="9" height="2" fill="#21468B" />
      </symbol>
      <symbol id="flag-gb" viewBox="0 0 60 30">
        <clipPath id="gbc">
          <rect width="60" height="30" />
        </clipPath>
        <rect width="60" height="30" fill="#012169" />
        <g clipPath="url(#gbc)">
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </symbol>
      <symbol id="flag-de" viewBox="0 0 5 3">
        <rect width="5" height="1" fill="#000" />
        <rect y="1" width="5" height="1" fill="#DD0000" />
        <rect y="2" width="5" height="1" fill="#FFCE00" />
      </symbol>
      <symbol id="flag-fr" viewBox="0 0 3 2">
        <rect width="1" height="2" fill="#002654" />
        <rect x="1" width="1" height="2" fill="#fff" />
        <rect x="2" width="1" height="2" fill="#ED2939" />
      </symbol>
      <symbol id="flag-es" viewBox="0 0 3 2">
        <rect width="3" height="2" fill="#AA151B" />
        <rect y=".5" width="3" height="1" fill="#F1BF00" />
      </symbol>
    </svg>
  );
}
