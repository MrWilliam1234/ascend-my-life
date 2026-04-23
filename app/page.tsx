// app/page.tsx
// Homepage — shows a test button that opens the AuthModal.
// This is temporary for Step 03 testing. Real landing page comes later.

'use client';

import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Ascend My Life</h1>
      <p className="eyebrow" style={{ marginTop: '8px' }}>
        Auth test · Step 03
      </p>

      <p style={{ marginTop: '24px' }}>
        Click the button below to test the login flow. After signing in, you
        should land on <code>/app</code>.
      </p>

      <button
        className="btn"
        style={{ marginTop: '24px' }}
        onClick={() => setAuthOpen(true)}
      >
        Sign in
      </button>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </main>
  );
}