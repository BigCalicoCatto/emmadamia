'use client';

import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: 'Georgia, serif', backgroundColor: '#fafaf8', color: '#1a1a1a', minHeight: '100vh' }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: '60px 20px 30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Full Width Name */}
        <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 8px 0', letterSpacing: '3px', fontFamily: 'Poiret One, cursive' }}>Emma Damia</h1>
        
        {/* Bio Below Name - Same Width */}
        <p style={{ fontSize: '16px', fontWeight: '300', margin: '0 0 40px 0', color: '#666', letterSpacing: '1px' }}>Fashion, Skincare and Beauty Enthusiast</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
          {/* Profile Picture */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/dp.jpg"
              alt="Emma Damia"
              style={{ width: '280px', height: '280px', objectFit: 'cover', borderRadius: '0px' }}
            />
          </div>

          {/* Hero Content - Buttons Only */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Social Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#" style={{ padding: '10px 20px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>Instagram</a>
              <a href="#" style={{ padding: '10px 20px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>TikTok</a>
              <a href="#" style={{ padding: '10px 20px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>YouTube</a>
              <a href="#" style={{ padding: '10px 20px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>10% with EMMA10 on FashionTale</a>
              <a href="#" style={{ padding: '10px 20px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>RM20 voucher for SkinMagic</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section style={{ padding: '30px 20px 30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ width: '60%', margin: '0 auto 40px auto', height: '1px', backgroundColor: '#d4d4d4' }}></div>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '30px', letterSpacing: '1px', fontFamily: 'Poiret One, cursive' }}>About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          {/* About Text */}
          <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', margin: '0 0 20px 0', fontWeight: '300' }}>I believe beauty lives in simplicity — in skincare that feels like self-care, outfits that breathe confidence, and moments captured without noise.</p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', margin: '0 0 30px 0', fontWeight: '300' }}>This space is my white canvas: calm, intentional, and entirely mine.</p>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#999', fontStyle: 'italic' }}>Note: Emma Damia is a fictional persona created solely to demonstrate website layout and aesthetic styling. All content is imagined for illustrative purposes. Your real site will feature your authentic voice, photos, and story.</p>
          </div>

          {/* About Image */}
          <div style={{ width: '100%' }}>
            <img
              src="/am.jpg"
              alt="About Emma"
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0px', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* MY RECENT WORKS SECTION */}
      <section style={{ padding: '60px 20px 30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ width: '60%', margin: '0 auto 40px auto', height: '1px', backgroundColor: '#d4d4d4' }}></div>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '30px', letterSpacing: '1px', fontFamily: 'Poiret One, cursive' }}>My Recent Works</h2>
        <div style={{ overflowX: 'auto', paddingBottom: '10px', display: 'flex', gap: '20px' }}>
          {[
            { src: '/f1.jpg', alt: 'Work 1' },
            { src: '/sb1.jpg', alt: 'Work 2' },
            { src: '/f3.jpg', alt: 'Work 3' }
          ].map((item, idx) => (
            <a
              key={idx}
              href="#"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: 'relative',
                minWidth: '200px',
                height: '320px',
                borderRadius: '0px',
                overflow: 'hidden',
                boxShadow: hoveredCard === idx ? '0 15px 40px rgba(0,0,0,0.15)' : '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', transform: hoveredCard === idx ? 'scale(1.05)' : 'scale(1)', display: 'block' }}
              />
            </a>
          ))}
        </div>
      </section>

      {/* FASHION SECTION */}
      <section style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ width: '60%', margin: '0 auto 40px auto', height: '1px', backgroundColor: '#d4d4d4' }}></div>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '30px', letterSpacing: '1px', fontFamily: 'Poiret One, cursive' }}>Fashion</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '20px', gridTemplateRows: 'auto auto' }}>
          {/* Left Column - Two small cards */}
          <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
            <img src="/f1.jpg" alt="Fashion 1" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', gridColumn: '1', gridRow: '2' }}>
            <img src="/f2.jpg" alt="Fashion 2" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Right Column - One large card */}
          <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', gridColumn: '2', gridRow: '1 / 3' }}>
            <img src="/f3.jpg" alt="Fashion 3" style={{ width: '100%', height: '620px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* SKINCARE & BEAUTY REVIEWS SECTION */}
      <section style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ width: '60%', margin: '0 auto 40px auto', height: '1px', backgroundColor: '#d4d4d4' }}></div>
        <h2 style={{ fontSize: '28px', fontWeight: '400', marginBottom: '30px', letterSpacing: '1px', fontFamily: 'Poiret One, cursive' }}>Skincare & Beauty Reviews</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', gridTemplateRows: 'auto auto' }}>
          {/* Left Column - One large card */}
          <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', gridColumn: '1', gridRow: '1 / 3' }}>
            <img src="/sb1.jpg" alt="Skincare 1" style={{ width: '100%', height: '620px', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Right Column - Two small cards */}
          <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)' }}>
            <img src="/sb2.jpg" alt="Skincare 2" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', gridColumn: '2', gridRow: '2' }}>
            <img src="/sb3.jpg" alt="Skincare 3" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ width: '60%', margin: '0 auto 40px auto', height: '1px', backgroundColor: '#d4d4d4' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
          {/* CTA Image */}
          <div style={{ borderRadius: '0px', overflow: 'hidden' }}>
            <img src="/dp.jpg" alt="Emma" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ fontSize: '16px', fontWeight: '300', marginBottom: '10px', lineHeight: '1.6' }}>Let's collaborate and create something beautiful together. Reach out through your preferred channel.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:" style={{ padding: '12px 24px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>Email</a>
              <a href="#" style={{ padding: '12px 24px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>WhatsApp</a>
              <a href="https://instagram.com" style={{ padding: '12px 24px', border: '1px solid #1a1a1a', borderRadius: '0px', backgroundColor: 'transparent', color: '#1a1a1a', textDecoration: 'none', fontSize: '13px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s ease', fontFamily: 'Georgia, serif' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; e.currentTarget.style.color = '#fafaf8'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a1a1a'; }}>DM on Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #e0e0e0', marginTop: '60px' }}>
        <p style={{ fontSize: '12px', color: '#999', margin: '0', letterSpacing: '0.5px' }}>© 2025 Emma Damia engineered by FatCalico&Co</p>
      </footer>
    </div>
  );
}
