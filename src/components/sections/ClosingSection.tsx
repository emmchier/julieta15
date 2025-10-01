import React from 'react';
import { Julieta } from '../svg';

export function ClosingSection() {
  return (
    <div className="h-[100vh] flex items-center justify-center relative overflow-hidden">
      {/* Gradient overlay para resaltar el texto */}
      <div
        className="absolute inset-0 z-5"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />

      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-10 svg-scale-mobile">
        <div style={{ transform: 'scale(0.8)', opacity: 0.7 }}>
          <Julieta color="#F3A8F8" width={300} height={130} />
        </div>
      </div>

      <div className="max-w-[320px] sm:max-w-[360px] px-2 sm:px-5 lg:px-0 relative z-20">
        <div className="section-content text-center">
          <p
            style={{
              fontFamily: 'Quando, serif',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '700',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Te espero para compartir{' '}
            <span className="block">una noche mágica.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
