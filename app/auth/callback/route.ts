// app/auth/callback/route.ts
// OAuth callback — Google redirects here after login.
// Exchanges the temporary code for a session, then redirects to /app.

import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/app';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Something went wrong — send them to the homepage with an error flag
  return NextResponse.redirect(`${origin}/?auth=error`);
}