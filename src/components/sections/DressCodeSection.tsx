import React from 'react';
import { Divider, Dresscode, LoveStyle } from '../svg';

export function DressCodeSection() {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-mobile-margin">
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
                color: '#626262',
                fontSize: '18px',
              }}
            >
              Dress code
            </p>
            <div className="my-2">
              <h2
                style={{
                  fontFamily: 'Purple Purse, cursive',
                  color: '#A897CE',
                  fontSize: '36px',
                }}
              >
                ELEGANTE SPORT
              </h2>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <LoveStyle />
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <Divider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
