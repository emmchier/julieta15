import React from 'react';
import { Divider, Dresscode } from '../svg';
import { Purple_Purse } from 'next/font/google';

const purplePurse = Purple_Purse({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export function DressCodeSection() {
  return (
    <section
      className="h-[100vh] flex items-center justify-center relative pb-16"
      aria-labelledby="dresscode-title"
    >
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          <div
            className="flex justify-center mb-8"
            role="img"
            aria-label="Ícono de dress code"
          >
            <div className="svg-icon-responsive">
              <Dresscode />
            </div>
          </div>

          <div className="mb-8">
            <p className="font-quando text-[#626262] text-lg">Dress code</p>
            <div className="my-2">
              <h2
                id="dresscode-title"
                className={`${purplePurse.className} text-[#8164C1] text-4xl mb-8`}
              >
                ELEGANTE SPORT
              </h2>
              <p className="font-quando text-[#626262] text-lg">
                Si podés, evitá usar color blanco o tonos claros como el
                natural, champagne o pasteles.
              </p>
            </div>
          </div>

          <div
            className="flex justify-center mb-8"
            role="img"
            aria-label="Separador decorativo"
          >
            <div className="svg-icon-responsive">
              <Divider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
