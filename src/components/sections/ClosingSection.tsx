import React from 'react';
import { Julieta } from '../svg';

export function ClosingSection() {
  return (
    <div className="h-[100vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-10 svg-scale-mobile">
        <div style={{ transform: 'scale(0.6)', opacity: 0.5 }}>
          <Julieta />
        </div>
      </div>

      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          <p
            style={{
              fontFamily: 'Quando, serif',
              color: '#626262',
              fontSize: '20px',
            }}
          >
            Te espero para compartir una noche mágica.
          </p>
        </div>
      </div>
    </div>
  );
}
