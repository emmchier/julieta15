import React from 'react';
import { Divider, Dresscode } from '../svg';
import { GlassCard } from '../ui';

export function DressCodeSection() {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-container-desktop">
        <GlassCard className="p-8 glass-card-desktop">
          <div className="section-content text-center">
            <div className="flex justify-center mb-8">
              <div className="svg-icon-responsive">
                <Dresscode />
              </div>
            </div>

            <div className="mb-8">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#FFFFFF',
                  fontSize: '18px',
                }}
              >
                Dress code
              </p>
              <div className="my-2">
                <h2
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '36px',
                  }}
                >
                  ELEGANTE
                </h2>
              </div>
              <div className="my-4">
                <p
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '16px',
                  }}
                >
                  Si podes, evita colores blanco, plateado y champagne
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="svg-icon-responsive">
                <Divider />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
