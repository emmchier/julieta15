import React from 'react';
import { Button } from '../ui';
import { Divider, Location } from '../svg';

interface LocationSectionProps {
  onVerUbicacion: () => void;
}

export function LocationSection({ onVerUbicacion }: LocationSectionProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <Location />
            </div>
          </div>

          <div className="mb-8">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '18px',
              }}
            >
              El lugar
            </p>
            <div className="my-2">
              <h2
                style={{
                  fontFamily: 'Purple Purse, cursive',
                  color: '#A897CE',
                  fontSize: '36px',
                }}
                className="uppercase"
              >
                Jano&apos;s Darwin 2
              </h2>
            </div>
            <div className="my-2">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#626262',
                  fontSize: '20px',
                }}
              >
                DARWIN 1351 | CABA
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <Divider />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onVerUbicacion}
              className="h-12 px-6 border-[#626262] bg-transparent hover:bg-[#f8f4f6] active:bg-[#f0e8ed] text-[#626262] font-normal tracking-[0.1em] uppercase"
              style={{
                fontFamily: 'Quando, serif',
                fontSize: '14px',
              }}
            >
              Ver ubicación
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
