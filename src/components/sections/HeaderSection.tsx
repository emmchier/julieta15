import React from 'react';
import { Julieta } from '../svg';

export function HeaderSection() {
  return (
    <div className="h-[100vh] flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
        <div className="section-content text-center">
          <div className="relative mb-4 flex justify-center items-center w-full h-[200px]">
            {/* Neon XV Text - Perfectly centered */}
            <div className="absolute inset-0 flex justify-center items-center w-full">
              <h1 className="neon-xv-text">XV</h1>
            </div>

            {/* Foreground SVG (Julieta script) - Perfectly centered */}
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="svg-scale-mobile">
                <Julieta color="#8B2BE2" />
              </div>
            </div>
          </div>
          <p
            className="px-6 text-center leading-relaxed"
            style={{
              fontFamily: 'Quando, serif',
              color: '#FFFFFF',
              fontSize: '22px',
              fontWeight: '700',
              marginTop: '40px',
            }}
          >
            Quince años de sueños, y hoy uno se hace realidad. ¡Quiero que seas
            parte de mi celebración!
          </p>
        </div>
      </div>
    </div>
  );
}
