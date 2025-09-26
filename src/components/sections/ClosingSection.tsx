import React from 'react';
import { Julieta } from '../svg';
// import { FlowerLeft1 } from '../flowers';

export function ClosingSection() {
  return (
    <footer
      className="h-[100vh] flex items-center justify-center relative overflow-hidden"
      role="contentinfo"
    >
      {/* <div
        data-flower="flower-left-2"
        className="absolute -left-[15%] -top-[180px]"
      >
        <FlowerLeft1 />
      </div> */}
      <div
        className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-10 svg-scale-mobile"
        role="img"
        aria-label="Julieta decorativo"
      >
        <div className="scale-[0.6] opacity-50">
          <Julieta />
        </div>
      </div>

      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          <p className="font-quando text-[#626262] text-xl">
            Te espero para compartir una noche mágica.
          </p>
        </div>
      </div>
    </footer>
  );
}
