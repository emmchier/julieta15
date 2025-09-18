import React from 'react';
import { Button } from '../ui';

interface LocationSectionProps {
  onVerUbicacion: () => void;
}

export function LocationSection({ onVerUbicacion }: LocationSectionProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0">
        <div className="section-content text-center">
          <div className="flex justify-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="1"
              viewBox="0 0 145 1"
              fill="none"
            >
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
              <path d="M0 0H145V1H0V0Z" fill="#D2C1ED" opacity="0.12" />
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.09" />
            </svg>
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
              >
                DARWIN 1351 | CABA
              </h2>
            </div>
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '20px',
              }}
            >
              de 21:00 a 5:00 h
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="1"
              viewBox="0 0 145 1"
              fill="none"
            >
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
              <path d="M0 0H145V1H0V0Z" fill="#E5E2EF" opacity="0.11" />
              <path d="M0 0H145V1H0V0Z" fill="#D2C1ED" opacity="0.13" />
            </svg>
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
