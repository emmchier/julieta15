import React from 'react';
import { Julieta } from '../svg';

export function HeaderSection() {
  return (
    <div className="h-[100vh] flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-[320px] sm:max-w-[360px] mx-auto px-4 sm:px-5 lg:px-0">
        <div className="section-content text-center">
          <div className="relative mb-4 flex justify-center items-center w-full h-[200px]">
            {/* Neon XV Text - Perfectly centered */}
            <div className="absolute inset-0 flex justify-center items-center w-full -translate-x-3">
              <h1 className="neon-xv-text">XV</h1>
            </div>

            {/* Foreground SVG (Julieta script) - Perfectly centered */}
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div
                className="svg-scale-mobile"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))',
                }}
              >
                <Julieta color="#8d219d" />
              </div>
            </div>
          </div>
          <p
            className="text-center mx-6 mt-20 leading-relaxed"
            style={{
              fontFamily: 'Quando, serif',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '500',
            }}
          >
            Quince años de sueños, y hoy uno se hace realidad.
            <br />
            ¡Quiero que seas parte de mi celebración!
          </p>
        </div>
      </div>
    </div>
  );
}
