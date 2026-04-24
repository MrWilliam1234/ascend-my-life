// app/page.tsx
// Landing page. Uses ascend.css classes exactly as in the design system
// shell. Header is an exact port of the shell header (lang dropdown,
// gender switch, theme popup, CTA). Body sections use real ascend
// component classes: .card, .btn, .eyebrow, .dog-ear, .trust-row etc.

'use client';

import { useState, useEffect, useRef } from 'react';
import AuthModal from '@/components/AuthModal';

export default function LandingPage() {
  const [authOpen, setAuthOpen] = useState(false);
  const [lang, setLang] = useState<'nl' | 'en' | 'de' | 'fr' | 'es'>('nl');
  const [mood, setMood] = useState<'journal' | 'noir' | 'swiss' | 'golden' | 'crypto'>('journal');
  const [gender, setGender] = useState<'M' | 'F' | 'X'>('M');
  const [langOpen, setLangOpen] = useState(false);
  const [moodOpen, setMoodOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const moodRef = useRef<HTMLDivElement>(null);

  // sync body mood class
  useEffect(() => {
    document.body.className = `m-${mood}`;
  }, [mood]);

  // close popups on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (moodRef.current && !moodRef.current.contains(e.target as Node)) {
        setMoodOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const beginFree = () => {
    window.location.href = '/assessment';
  };

  const langLabels = { nl: 'NL', en: 'EN', de: 'DE', fr: 'FR', es: 'ES' };
  const moodLabels = { journal: 'Journal', noir: 'Noir', swiss: 'Swiss', golden: 'Golden', crypto: 'Crypto' };

  return (
    <>
      {/* ═══ HEADER ═══ */}
      <header className="site-header">
        <div className="logo" onClick={() => (window.location.href = '/')}>
          Ascend<em>.</em>
        </div>

        <div className="header-quote">
          <span className="strike">
            Je hebt een discipline-probleem.
            <svg className="strike-line" viewBox="0 0 600 14" preserveAspectRatio="none">
              <path className="m3" d="M4,7 Q100,11 210,6 T420,8 T596,7" />
              <path className="m1" d="M4,7 Q100,11 210,6 T420,8 T596,7" />
              <path className="m2" d="M6,9 Q110,12 220,8 T430,10 T594,9" />
            </svg>
          </span>
          <h1>
            Je hebt een <span className="ac">design</span>-probleem.
          </h1>
        </div>

        <div className="header-right">
          {/* Language dropdown */}
          <div className={`lang-drop ${langOpen ? 'open' : ''}`} ref={langRef}>
            <button
              className={`hdr-chip ${langOpen ? 'open' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
                setMoodOpen(false);
              }}
              aria-label="Change language"
            >
              <svg className="flag-svg">
                <use href={`#flag-${lang === 'en' ? 'gb' : lang}`} />
              </svg>
              <span>{langLabels[lang]}</span>
              <span className="chev">▾</span>
            </button>
            {langOpen && (
              <div className="lang-menu open">
                {(['nl', 'en', 'de', 'fr', 'es'] as const).map((l) => (
                  <div
                    key={l}
                    className={`lang-item ${l === lang ? 'on' : ''}`}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                  >
                    <svg className="flag-svg">
                      <use href={`#flag-${l === 'en' ? 'gb' : l}`} />
                    </svg>
                    {l === 'nl' && 'Nederlands'}
                    {l === 'en' && 'English'}
                    {l === 'de' && 'Deutsch'}
                    {l === 'fr' && 'Français'}
                    {l === 'es' && 'Español'}
                    <span className="code">{langLabels[l]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gender switch */}
          <div className="hdr-chip gender">
            {(['M', 'F', 'X'] as const).map((g) => (
              <button
                key={g}
                className={`gbtn ${gender === g ? 'on' : ''}`}
                onClick={() => setGender(g)}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Theme popup */}
          <div className="theme-drop" ref={moodRef}>
            <button
              className="hdr-chip theme"
              onClick={(e) => {
                e.stopPropagation();
                setMoodOpen(!moodOpen);
                setLangOpen(false);
              }}
            >
              <span className="theme-dot"></span>
              <span className="label">{moodLabels[mood]}</span>
            </button>
            {moodOpen && (
              <div className="mood-pop open">
                <div className="mood-pop-label">Mood</div>
                <div className="mood-grid">
                  {(
                    [
                      ['journal', 'linear-gradient(135deg,#F5EFE0 0 50%, #4A6741 50% 100%)'],
                      ['noir', 'linear-gradient(135deg,#0D0D0D 0 50%, #FFE566 50% 100%)'],
                      ['swiss', 'linear-gradient(135deg,#FAFAFA 0 50%, #E8302A 50% 100%)'],
                      ['golden', 'linear-gradient(135deg,#0D1B2A 0 50%, #C9A84C 50% 100%)'],
                      ['crypto', 'linear-gradient(135deg,#0A0812 0 50%, #9B8FF0 50% 100%)'],
                    ] as const
                  ).map(([m, bg]) => (
                    <div
                      key={m}
                      className={`mood-swatch ${mood === m ? 'on' : ''}`}
                      style={{ background: bg }}
                      onClick={() => {
                        setMood(m);
                        setMoodOpen(false);
                      }}
                    ></div>
                  ))}
                </div>
                <div className="mood-labels">
                  <span>Journal</span>
                  <span>Noir</span>
                  <span>Swiss</span>
                  <span>Golden</span>
                  <span>Crypto</span>
                </div>
              </div>
            )}
          </div>

          <button className="hdr-chip" onClick={() => setAuthOpen(true)}>
            Sign in
          </button>
          <button className="hdr-chip cta" onClick={beginFree}>
            Gratis starten →
          </button>
        </div>
      </header>

      {/* ═══ BODY ═══ */}
      <main className="sheet-body">
        {/* HERO */}
        <section>
          <span className="eyebrow">Je leven · in één blik</span>
          <h2 className="mb-3" style={{ maxWidth: '720px' }}>
            4 minuten. 12 levensdomeinen. Jouw blueprint.
          </h2>
          <p style={{ maxWidth: '620px' }}>
            Geen account nodig totdat je het wilt opslaan. Dit is de eerste stap
            naar een leven dat je zelf hebt ontworpen — in plaats van opgelegd.
          </p>
          <div className="flex gap-3 flex-wrap mt-5">
            <button className="btn btn-lg btn-heartbeat" onClick={beginFree}>
              Begin mijn assessment →
            </button>
            <button className="btn btn-ghost" onClick={() => setAuthOpen(true)}>
              Al een account? Log in
            </button>
          </div>
          <div className="trust-row mt-5">
            <div className="trust-item">
              <span className="dot-sm"></span>Gratis te beginnen
            </div>
            <div className="trust-item">
              <span className="dot-sm"></span>4 minuten
            </div>
            <div className="trust-item">
              <span className="dot-sm"></span>Geen account totdat je wilt opslaan
            </div>
          </div>
        </section>

        {/* POSTER TEASER — 1 domain in focus, rest blurred */}
        <section>
          <span className="eyebrow">Je leven · op één pagina</span>
          <h2 className="mb-3">Één domein in focus. De rest wachtend.</h2>
          <p style={{ maxWidth: '620px' }}>
            Elk domein krijgt zijn eigen score, affirmatie, geautomatiseerd
            systeem en before/after foto&apos;s — allemaal gegenereerd uit jouw
            data.
          </p>

          <div
            className="mt-5"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 420px) 1fr',
              gap: 'var(--s-5)',
              alignItems: 'start',
            }}
          >
            {/* Focus domain card */}
            <article
              className="card card-domain dog-ear"
              data-domain="body"
              style={{ position: 'relative', zIndex: 2 }}
            >
              <div className="card-header">
                <div>
                  <div className="card-title">Body</div>
                  <div className="domain-state">Athletic</div>
                </div>
                <div className="domain-score">7/10</div>
              </div>
              <div className="card-body">
                <div style={{ marginBottom: 'var(--s-3)' }}>
                  <span
                    className="eyebrow"
                    style={{ display: 'block', marginBottom: 'var(--s-1)' }}
                  >
                    Affirmatie
                  </span>
                  <em style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-md)' }}>
                    &ldquo;Mijn lichaam is tot meer in staat dan ik ooit heb geëist.&rdquo;
                  </em>
                </div>
                <div style={{ marginBottom: 'var(--s-3)' }}>
                  <span
                    className="eyebrow"
                    style={{ display: 'block', marginBottom: 'var(--s-1)' }}
                  >
                    Actief systeem
                  </span>
                  3 sessies / week · Ma · Wo · Za · automatisch ingepland
                </div>
                <div>
                  <span
                    className="eyebrow"
                    style={{ display: 'block', marginBottom: 'var(--s-1)' }}
                  >
                    Dagelijks · wekelijks
                  </span>
                  <ul style={{ margin: 0, paddingLeft: 'var(--s-4)' }}>
                    <li>Ochtendmobiliteit · 10 min</li>
                    <li>Eiwit bij elke maaltijd</li>
                    <li>Zondag voortgangsfoto</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Blurred grid of other 11 domains */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--s-3)',
                filter: 'blur(3px)',
                opacity: 0.55,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {[
                ['finance', 'Finance', '4/10'],
                ['mind', 'Mind', '5/10'],
                ['spirit', 'Spirit', '3/10'],
                ['rels', 'Rels', '7/10'],
                ['career', 'Career', '6/10'],
                ['env', 'Environment', '5/10'],
                ['identity', 'Identity', '4/10'],
                ['time', 'Time', '5/10'],
                ['health', 'Health', '8/10'],
                ['creat', 'Creativity', '6/10'],
                ['impact', 'Impact', '3/10'],
              ].map(([key, name, score]) => (
                <article
                  key={key}
                  className="card card-domain"
                  data-domain={key}
                  style={{ padding: 'var(--s-3)' }}
                >
                  <div className="card-header">
                    <div>
                      <div className="card-title" style={{ fontSize: 'var(--fs-sm)' }}>
                        {name}
                      </div>
                    </div>
                    <div className="domain-score" style={{ fontSize: 'var(--fs-xs)' }}>
                      {score}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="btn btn-ghost" onClick={() => (window.location.href = '/poster')}>
              Bekijk de volledige poster →
            </button>
          </div>
        </section>

        {/* USPs - 5 pijlers */}
        <section>
          <span className="eyebrow">Waarom dit anders is</span>
          <h2 className="mb-3">Wat Ascend onmogelijk te kopiëren maakt</h2>

          <div
            className="grid gap-4 mt-4"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
          >
            {[
              {
                n: '01',
                title: 'Systemen, geen discipline',
                body:
                  'Discipline raakt op. Systemen draaien. We vragen je niet om harder te werken — we bouwen geautomatiseerde architectuur voor elk domein.',
              },
              {
                n: '02',
                title: 'De Shadow Layer',
                body:
                  'AI die je zelfsabotage-patronen vindt voordat je ze zelf kan zien. "Je laat dingen vallen na 11 dagen." Benoemd. Opgelost.',
              },
              {
                n: '03',
                title: 'Before & After Vision Board',
                body:
                  'Echte foto\'s. Persoonlijke affirmaties. AI-gegenereerde beelden van je toekomstige zelf. Per domein. De emotionele kern.',
              },
              {
                n: '04',
                title: 'Anti-dopamine design',
                body:
                  'We willen dat je deze app mínder gaat gebruiken. Presence first. Tolle-energie, geen TikTok-energie. De enige app die zichzelf overbodig wil maken.',
              },
              {
                n: '05',
                title: 'Het voelt als een dagboek',
                body:
                  'Warme papiertextuur. Inkt. Serif. Geruite lijnen. Als schrijven in een prachtig hardcover. De feel IS het product.',
              },
              {
                n: '06',
                title: 'Jouw leven, aan je muur',
                body:
                  'Bestel je persoonlijke life blueprint als fysieke poster. Gegenereerd uit jouw data. Naar je deur gestuurd. De app wordt tastbaar.',
              },
            ].map((usp) => (
              <article key={usp.n} className="card">
                <div className="card-body">
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--fs-xxl)',
                      color: 'var(--acc)',
                      lineHeight: 1,
                      marginBottom: 'var(--s-2)',
                    }}
                  >
                    {usp.n}
                  </div>
                  <div className="card-title" style={{ marginBottom: 'var(--s-2)' }}>
                    {usp.title}
                  </div>
                  <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--ink-2)' }}>
                    {usp.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SYSTEMS ENGINE */}
        <section>
          <span className="eyebrow">De systems engine</span>
          <h2 className="mb-3">Bouw het één keer. Het werkt terwijl jij niks doet.</h2>
          <p style={{ maxWidth: '620px' }}>
            Elk domein krijgt een geautomatiseerd systeem — AI-ontworpen rond
            jouw inkomen, agenda, doelen. Geen besluiten meer zodra het draait.
          </p>

          <div
            className="grid gap-4 mt-5"
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
          >
            {[
              {
                domain: 'finance',
                name: 'Finance',
                title: 'Auto-investeringsplan',
                body:
                  'Elke payday: €200 → stocks ETF, €100 → crypto, €50 → goud. Auto-transfer. Je raakt het niet meer aan. In 2 jaar: verbluffend.',
                tag: 'Op payday',
              },
              {
                domain: 'body',
                name: 'Body',
                title: 'Geplande bewegingsroutine',
                body:
                  '3 trainingen per week, in je agenda geblokkeerd. Geen beslissing op de dag zelf. Opdagen. Het systeem haalt het "moet ik?" weg.',
                tag: 'Calendar sync',
              },
              {
                domain: 'rels',
                name: 'Relationships',
                title: 'Connection calendar',
                body:
                  '4 belangrijke mensen. Maandelijkse koffie vooraf ingepland. Verjaardagsherinnering 2 weken vooraf. Relaties onderhouden zonder nadenken.',
                tag: 'Auto-ingepland',
              },
              {
                domain: 'career',
                name: 'Career',
                title: 'Deep work blocks',
                body:
                  '2 uur elke ochtend. Geen meetings. Geen email. Eén belangrijke taak. AI vindt je piekuren. Bewaakt de tijd.',
                tag: 'Calendar protected',
              },
            ].map((s) => (
              <article
                key={s.domain}
                className="card card-system"
                data-domain={s.domain}
              >
                <div className="card-header">
                  <div>
                    <div
                      className="eyebrow"
                      style={{ marginBottom: 'var(--s-1)' }}
                    >
                      {s.name}
                    </div>
                    <div className="card-title">{s.title}</div>
                  </div>
                </div>
                <div className="card-body">
                  <p style={{ marginBottom: 'var(--s-3)' }}>{s.body}</p>
                  <span className="dom-chip" data-domain={s.domain}>
                    {s.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* POSTER */}
        <section>
          <span className="eyebrow">De fysieke poster</span>
          <h2 className="mb-3">Jouw blueprint — van scherm naar muur.</h2>
          <p style={{ maxWidth: '620px' }}>
            Gegenereerd uit je assessment, vision board, affirmaties, scores en
            systemen. Elke poster is uniek. Elke poster is persoonlijk. Elke
            poster die gefotografeerd en gedeeld wordt is een advertentie
            waarvoor je niet hebt betaald.
          </p>

          <div
            className="grid gap-4 mt-5"
            style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
          >
            <article className="card">
              <div className="card-body">
                <div className="card-title">Digitale PDF</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--fs-xxl)',
                    color: 'var(--acc)',
                    margin: 'var(--s-2) 0',
                  }}
                >
                  €9
                </div>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-3)' }}>
                  300dpi · direct beschikbaar
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card-body">
                <div className="card-title">A2 Poster</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--fs-xxl)',
                    color: 'var(--acc)',
                    margin: 'var(--s-2) 0',
                  }}
                >
                  €29
                </div>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-3)' }}>
                  Mat · levering 5–7 dagen
                </p>
              </div>
            </article>
            <article className="card">
              <div className="card-body">
                <div className="card-title">A1 Premium</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--fs-xxl)',
                    color: 'var(--acc)',
                    margin: 'var(--s-2) 0',
                  }}
                >
                  €49
                </div>
                <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-3)' }}>
                  Zwaar papier · frame optie
                </p>
              </div>
            </article>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="btn" onClick={beginFree}>
              Begin assessment om jouw poster te genereren →
            </button>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ textAlign: 'center', paddingBottom: 'var(--s-7)' }}>
          <span className="eyebrow">Eén beslissing</span>
          <h2
            className="mb-3"
            style={{
              fontSize: 'var(--fs-xxxl)',
              lineHeight: 1.05,
              margin: 'var(--s-3) auto',
              maxWidth: '640px',
            }}
          >
            Stop met jagen. Begin met worden.
          </h2>
          <p style={{ maxWidth: '520px', margin: '0 auto var(--s-5)' }}>
            4 minuten. Je complete leven, in kaart.
            <br />
            Geen account nodig totdat je het wilt opslaan.
          </p>
          <button
            className="btn btn-lg btn-heartbeat"
            onClick={beginFree}
            style={{ margin: '0 auto' }}
          >
            Begin mijn assessment →
          </button>
          <p
            style={{
              fontSize: 'var(--fs-xs)',
              color: 'var(--ink-3)',
              marginTop: 'var(--s-4)',
            }}
          >
            Gratis te beginnen · €7/maand voor het volledige systeem · altijd
            annulerbaar · data blijft van jou
          </p>

          <div className="trust-row mt-5" style={{ justifyContent: 'center' }}>
            <div className="trust-item">
              <span className="dot-sm"></span>Privacy first — jouw data is van jou
            </div>
            <div className="trust-item">
              <span className="dot-sm"></span>Geen dark patterns, ooit
            </div>
            <div className="trust-item">
              <span className="dot-sm"></span>De app die wil dat je hem minder nodig hebt
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <div className="footer-left">
          <div className="logo" style={{ fontSize: 'var(--fs-xl)' }}>
            Ascend<em>.</em>
          </div>
          <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-3)', marginTop: 'var(--s-2)' }}>
            Een life operating system.
          </p>
        </div>
        <div className="footer-trust" style={{ fontSize: 'var(--fs-xs)', color: 'var(--ink-3)' }}>
          <div>© 2026 Ascend My Life</div>
          <div style={{ marginTop: 'var(--s-1)' }}>
            <a href="/about" style={{ color: 'var(--ink-2)', marginRight: 'var(--s-3)' }}>
              About
            </a>
            <a href="/privacy" style={{ color: 'var(--ink-2)', marginRight: 'var(--s-3)' }}>
              Privacy
            </a>
            <a href="/terms" style={{ color: 'var(--ink-2)' }}>
              Terms
            </a>
          </div>
        </div>
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
