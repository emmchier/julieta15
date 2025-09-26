import React from 'react';
import { Button, GlassCard } from '../ui';
import { Date, Divider } from '../svg';

interface DateSectionProps {
  onAgendarEvento: () => void;
}

export function DateSection({ onAgendarEvento }: DateSectionProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-container-desktop">
        <GlassCard className="p-8 glass-card-desktop">
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
                  color: '#FFFFFF',
                  fontSize: '18px',
                }}
              >
                El día Sábado
              </p>
              <div className="my-2">
                <h2
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '36px',
                  }}
                >
                  13.12.2025
                </h2>
              </div>
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#FFFFFF',
                  fontSize: '20px',
                }}
              >
                de 21:00 a 5:00 hs
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
                className="h-12 px-6 border-[#FFFFFF] bg-transparent text-[#FFFFFF] hover:bg-white/20 active:bg-white/30 font-normal uppercase tracking-[0.1em]"
                style={{
                  fontFamily: 'Quando, serif',
                  fontSize: '14px',
                }}
              >
                Agendar evento
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
