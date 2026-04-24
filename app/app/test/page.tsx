// app/page.tsx
// Landing page · Step 04 · static-first port of ascend-landing-v57__6_.html
// Content follows the HTML 1-for-1. Interactive hero (slider/canvas/mascot)
// parked for a later session — placeholder visual for now.

'use client';

import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import DomainTeaser from '@/components/DomainTeaser';
import UspSection from '@/components/UspSection';
import SystemsEngine from '@/components/SystemsEngine';
import PosterPreview from '@/components/PosterPreview';
import FinalCta from '@/components/FinalCta';
import SiteFooter from '@/components/SiteFooter';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <SiteHeader onSignIn={() => setAuthOpen(true)} />
      <Hero />
      <DomainTeaser />
      <UspSection />
      <SystemsEngine />
      <PosterPreview />
      <FinalCta />
      <SiteFooter />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
