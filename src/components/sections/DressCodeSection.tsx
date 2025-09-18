import React from 'react';

export function DressCodeSection() {
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
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.13" />
              <path d="M0 0H145V1H0V0Z" fill="#E5E2EF" opacity="0.08" />
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

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="1"
              viewBox="0 0 145 1"
              fill="none"
            >
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" />
              <path d="M0 0H145V1H0V0Z" fill="#D2C1ED" opacity="0.1" />
              <path d="M0 0H145V1H0V0Z" fill="#A897CE" opacity="0.12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
