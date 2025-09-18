import React from 'react';
import { Button } from '../ui';
import { Date, Divider } from '../svg';

interface DateSectionProps {
  onAgendarEvento: () => void;
}

export function DateSection({ onAgendarEvento }: DateSectionProps) {
  return (
    <div className="h-[100vh] relative flex items-center justify-center">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
        <div className="section-content text-center">
          {/* Top SVG (title flourish) */}
          <div className="mb-8 flex justify-center">
            <div className="svg-icon-responsive">
              <Date />
            </div>
          </div>

          {/* Text stack */}
          <div className="mb-8">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#626262',
                fontSize: '18px',
              }}
            >
              El día Sábado
            </p>
            <div className="my-2">
              <h2
                style={{
                  fontFamily: 'Purple Purse, cursive',
                  color: '#A897CE',
                  fontSize: '36px',
                }}
              >
                13.12.2025
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

          {/* Divider SVG */}
          <div className="mb-8 flex justify-center">
            <div className="svg-icon-responsive">
              <Divider />
            </div>
          </div>

          {/* Outline Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={onAgendarEvento}
              className="h-12 px-6 border-[#626262] bg-transparent text-[#626262] hover:bg-[#f8f4f6] active:bg-[#f0e8ed] font-normal uppercase tracking-[0.1em]"
              style={{
                fontFamily: 'Quando, serif',
                fontSize: '14px',
              }}
            >
              Agendar evento
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
