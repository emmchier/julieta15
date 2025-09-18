import React from 'react';
import { XV, Julieta } from '../svg';

export function HeaderSection() {
  return (
    <div className="h-[100vh] relative flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
        <div className="section-content text-center">
          <div className="relative mb-4 flex justify-center items-center">
            {/* Background SVG (XV) - Made bigger */}
            <div className="absolute svg-scale-mobile">
              <XV />
            </div>

            {/* Foreground SVG (Julieta script) - Perfectly centered */}
            <div className="relative z-10 svg-scale-mobile">
              <Julieta />
            </div>
          </div>
          <p
            className="px-6 text-center leading-relaxed"
            style={{
              fontFamily: 'Quando, serif',
              color: '#626262',
              fontSize: '18px',
              marginTop: '72px',
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
