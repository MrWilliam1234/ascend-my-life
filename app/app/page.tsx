// app/app/page.tsx
// Dashboard placeholder — only accessible when logged in (middleware enforces).

import { createClient } from '@/lib/supabase-server';

export default async function Dashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Dashboard</h1>
      <p className="eyebrow" style={{ marginTop: '8px' }}>
        You are logged in
      </p>

      <p style={{ marginTop: '24px' }}>
        Email: <strong>{user?.email ?? 'unknown'}</strong>
      </p>
      <p>
        User ID: <code style={{ fontSize: '12px' }}>{user?.id}</code>
      </p>

      <form action="/auth/signout" method="POST" style={{ marginTop: '32px' }}>
        <button type="submit" className="btn btn-ghost">
          Sign out
        </button>
      </form>
    </main>
  );
}