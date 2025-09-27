import React from 'react';
import { Countdown, Divider } from '../svg';
import { GlassCard } from '../ui';

interface CountdownSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function CountdownSection({ timeLeft }: CountdownSectionProps) {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-container-desktop">
        <GlassCard className="p-8 glass-card-desktop">
          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <Countdown />
            </div>
          </div>

          <div className="section-content text-center mb-12">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#FFFFFF',
                fontSize: '18px',
              }}
              className="mb-8"
            >
              Contando los días
            </p>

            <div className="counter-mobile-grid flex gap-2 w-full">
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#2D0F3F] px-2 py-2 flex flex-col items-center justify-center">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  días
                </div>
              </div>
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#2D0F3F] px-2 py-2 flex flex-col items-center justify-center">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  hs
                </div>
              </div>
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#2D0F3F] px-2 py-2 flex flex-col items-center justify-center">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  min
                </div>
              </div>
              <div className="counter-item flex-1 h-[72px] rounded-lg bg-[#2D0F3F] px-2 py-8 flex flex-col items-center justify-center">
                <div
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '40px',
                    lineHeight: '1',
                  }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    lineHeight: '1',
                  }}
                >
                  seg
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <Divider />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
