'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with same style as main app */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/static-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.8) contrast(1.2)',
        }}
      />

      {/* Glass overlay */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 with neon effect */}
        <div className="mb-8">
          <h1
            className="text-8xl sm:text-9xl font-black mb-4"
            style={{
              fontFamily: 'Arial Black, Arial, sans-serif',
              color: '#ffedfe',
              textShadow: `
                0 0 5px #ffedfe,
                0 0 10px #ffedfe,
                0 0 15px #ffedfe,
                0 0 20px #a897ce,
                0 0 35px #a897ce,
                0 0 40px #a897ce,
                0 0 50px #a897ce,
                0 0 75px #a897ce
              `,
              animation: 'neonFlicker 2s infinite alternate',
            }}
          >
            404
          </h1>
        </div>

        {/* Simple message */}
        <div
          className="mb-8"
          style={{
            fontFamily: 'Quando, serif',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          <p>ups... ¿Te perdiste?.</p>
          <p>No te preocupes.</p>
        </div>

        {/* Navigation button */}
        <Link href="/">
          <Button
            variant="outline"
            className="h-12 px-3 sm:px-6 border-[#FFFFFF] bg-transparent text-[#FFFFFF] hover:bg-white/20 active:bg-white/30 font-normal uppercase tracking-[0.1em]"
            style={{
              fontFamily: 'Quando, serif',
              fontSize: '14px',
            }}
          >
            Volver a la fiesta
          </Button>
        </Link>
      </div>
    </div>
  );
}
