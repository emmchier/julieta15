import React from 'react';
import { XV, Julieta } from '../svg';
import { FlowerLeft1, PetalosRight1 } from '../flowers';

export function HeaderSection() {
  return (
    <header
      className="h-[100vh] relative flex items-center justify-center overflow-hidden"
      role="banner"
    >
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
        <div className="section-content text-center">
          <div
            data-flower="flower-left-2"
            className="absolute right-10 -top-[280px]"
            role="img"
            aria-label="Flor decorativa"
          >
            <FlowerLeft1 />
          </div>
          <div
            data-flower="flower-left-2"
            className="absolute left-[60px] -top-[275px]"
            role="img"
            aria-label="Pétalos decorativos"
          >
            <PetalosRight1 />
          </div>
          <div className="relative mb-4 flex justify-center items-center">
            {/* Background SVG (XV) - Centered */}
            <div
              className="absolute svg-scale-mobile left-1/2 -translate-x-1/2"
              role="img"
              aria-label="XV decorativo"
            >
              <XV />
            </div>

            {/* Foreground SVG (Julieta script) - Perfectly centered */}
            <div
              className="relative z-10 svg-scale-mobile"
              role="img"
              aria-label="Julieta"
            >
              <Julieta />
            </div>
          </div>
          <p className="px-6 text-center leading-relaxed font-quando text-[#626262] text-lg mt-[72px]">
            Quince años de sueños, y hoy uno se hace realidad. ¡Quiero que seas
            parte de mi celebración!
          </p>
        </div>
      </div>
    </header>
  );
}
