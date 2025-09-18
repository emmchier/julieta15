'use client';

import React, { useEffect } from 'react';
import { Shine } from './svg';

export function ParallaxFlowers() {
  useEffect(() => {
    const flowers = document.querySelectorAll('[data-flower]');
    if (!flowers.length) return;

    const flowerSpeeds = {
      'flower-a': 0.02,
      'flower-b': 0.025,
      'flower-c': 0.03,
      'flower-d': 0.035,
      'flower-e': 0.04,
      'flower-f': 0.022,
      'flower-g': 0.027,
      'flower-h': 0.032,
      'flower-i': 0.037,
      'flower-j': 0.042,
      'flower-k': 0.018,
      'flower-l': 0.028,
      // Shine speeds (brillitos) - Double speed and very irregular
      'shine-1': 0.045,
      'shine-2': 0.038,
      'shine-3': 0.052,
      'shine-4': 0.041,
      'shine-5': 0.048,
      'shine-6': 0.035,
      'shine-7': 0.055,
      'shine-8': 0.032,
      'shine-9': 0.058,
      'shine-10': 0.043,
      'shine-11': 0.036,
      'shine-12': 0.049,
    };

    const flowerStates: { [key: string]: number } = {};
    flowers.forEach(flower => {
      const id = flower.getAttribute('data-flower') || '';
      flowerStates[id] = 0;
    });

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          flowers.forEach(flower => {
            const id = flower.getAttribute('data-flower') || '';
            const speed =
              flowerSpeeds[id as keyof typeof flowerSpeeds] || 0.025;
            const target = window.scrollY * speed;
            flowerStates[id] += (target - flowerStates[id]) * 0.05;
            (flower as HTMLElement).style.transform =
              `translate3d(0, ${flowerStates[id]}px, 0)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Petal 1 - Organic teardrop */}
      <div
        data-flower="flower-a"
        className="absolute"
        style={{ left: '5%', top: '-50px', transform: 'rotate(15deg)' }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80">
          <path
            d="M30,10 C20,5 10,15 12,30 C8,50 20,70 30,75 C40,70 52,50 48,30 C50,15 40,5 30,10 Z"
            fill="#D2C1ED"
            opacity="0.7"
          />
          <path
            d="M30,20 C25,18 20,25 22,35 C20,50 25,60 30,62 C35,60 40,50 38,35 C40,25 35,18 30,20 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 2 - Organic leaf */}
      <div
        data-flower="flower-b"
        className="absolute"
        style={{ left: '15%', top: '-40px', transform: 'rotate(-25deg)' }}
      >
        <svg width="80" height="60" viewBox="0 0 80 60">
          <path
            d="M40,5 C25,8 10,20 15,35 C8,45 20,55 40,58 C60,55 72,45 65,35 C70,20 55,8 40,5 Z"
            fill="#C4B3E0"
            opacity="0.6"
          />
          <path
            d="M40,15 C30,17 20,25 22,35 C18,42 25,48 40,50 C55,48 62,42 58,35 C60,25 50,17 40,15 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 3 - Organic heart */}
      <div
        data-flower="flower-c"
        className="absolute"
        style={{ left: '15%', top: '-55px', transform: 'rotate(45deg)' }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <path
            d="M35,10 C25,5 10,15 15,30 C8,45 20,60 35,65 C50,60 62,45 55,30 C60,15 45,5 35,10 Z"
            fill="#B8A9D6"
            opacity="0.8"
          />
          <path
            d="M35,20 C28,18 20,25 22,35 C18,45 25,52 35,55 C45,52 52,45 48,35 C50,25 42,18 35,20 Z"
            fill="#E5E2EF"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Petal 4 - Organic flame */}
      <div
        data-flower="flower-d"
        className="absolute"
        style={{ left: '20%', top: '-55px', transform: 'rotate(-10deg)' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path
            d="M40,5 C30,8 20,20 25,40 C15,55 30,70 40,75 C50,70 65,55 55,40 C60,20 50,8 40,5 Z"
            fill="#A897CE"
            opacity="0.7"
          />
          <path
            d="M40,15 C32,17 25,25 28,40 C20,50 30,60 40,62 C50,60 60,50 52,40 C55,25 48,17 40,15 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 5 - Organic wave */}
      <div
        data-flower="flower-e"
        className="absolute"
        style={{ left: '80%', top: '-50px', transform: 'rotate(30deg)' }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path
            d="M30,5 C20,10 10,20 15,35 C8,45 20,55 30,58 C40,55 52,45 45,35 C50,20 40,10 30,5 Z"
            fill="#D2C1ED"
            opacity="0.7"
          />
          <path
            d="M30,15 C25,18 20,25 22,35 C18,42 25,48 30,50 C35,48 42,42 38,35 C40,25 35,18 30,15 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 6 - Organic cloud */}
      <div
        data-flower="flower-f"
        className="absolute"
        style={{ left: '85%', top: '-45px', transform: 'rotate(-40deg)' }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <path
            d="M35,10 C25,8 15,15 18,30 C10,40 20,50 35,55 C50,50 60,40 52,30 C55,15 45,8 35,10 Z"
            fill="#C4B3E0"
            opacity="0.6"
          />
          <path
            d="M35,20 C28,18 22,22 24,32 C18,38 25,45 35,48 C45,45 52,38 46,32 C48,22 42,18 35,20 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 7 - Organic star */}
      <div
        data-flower="flower-g"
        className="absolute"
        style={{ left: '75%', top: '-48px', transform: 'rotate(20deg)' }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path
            d="M30,5 C25,15 15,20 20,30 C10,35 20,45 30,50 C40,45 50,35 40,30 C45,20 35,15 30,5 Z"
            fill="#B8A9D6"
            opacity="0.8"
          />
          <path
            d="M30,15 C27,20 22,22 24,28 C18,30 22,35 30,38 C38,35 42,30 36,28 C38,22 33,20 30,15 Z"
            fill="#E5E2EF"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Petal 8 - Organic drop */}
      <div
        data-flower="flower-h"
        className="absolute"
        style={{ left: '85%', top: '-38px', transform: 'rotate(-35deg)' }}
      >
        <svg width="50" height="70" viewBox="0 0 50 70">
          <path
            d="M25,5 C15,8 8,20 12,35 C5,50 15,65 25,68 C35,65 45,50 38,35 C42,20 35,8 25,5 Z"
            fill="#A897CE"
            opacity="0.7"
          />
          <path
            d="M25,15 C20,17 15,25 17,35 C12,45 18,55 25,58 C32,55 38,45 33,35 C35,25 30,17 25,15 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 9 - Organic oval */}
      <div
        data-flower="flower-i"
        className="absolute"
        style={{ left: '2%', top: '-50px', transform: 'rotate(50deg)' }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80">
          <path
            d="M30,10 C20,8 10,20 15,40 C8,55 20,70 30,75 C40,70 52,55 45,40 C50,20 40,8 30,10 Z"
            fill="#D2C1ED"
            opacity="0.7"
          />
          <path
            d="M30,20 C25,18 20,25 22,40 C18,50 25,60 30,62 C35,60 42,50 38,40 C40,25 35,18 30,20 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 10 - Organic shield */}
      <div
        data-flower="flower-j"
        className="absolute"
        style={{ left: '20%', top: '-30px', transform: 'rotate(-15deg)' }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <path
            d="M35,10 C25,8 15,15 18,30 C10,45 20,60 35,65 C50,60 60,45 52,30 C55,15 45,8 35,10 Z"
            fill="#C4B3E0"
            opacity="0.6"
          />
          <path
            d="M35,20 C28,18 22,22 24,32 C18,42 25,50 35,52 C45,50 52,42 46,32 C48,22 42,18 35,20 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 11 - Organic feather */}
      <div
        data-flower="flower-k"
        className="absolute"
        style={{ left: '80%', top: '-55px', transform: 'rotate(25deg)' }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80">
          <path
            d="M30,5 C20,10 10,25 15,45 C8,60 20,75 30,78 C40,75 52,60 45,45 C50,25 40,10 30,5 Z"
            fill="#B8A9D6"
            opacity="0.8"
          />
          <path
            d="M30,15 C25,18 20,28 22,42 C18,52 25,62 30,65 C35,62 42,52 38,42 C40,28 35,18 30,15 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Petal 12 - Organic wing */}
      <div
        data-flower="flower-l"
        className="absolute"
        style={{ left: '95%', top: '-50px', transform: 'rotate(-45deg)' }}
      >
        <svg width="50" height="70" viewBox="0 0 50 70">
          <path
            d="M25,5 C15,8 8,20 12,35 C5,50 15,65 25,68 C35,65 45,50 38,35 C42,20 35,8 25,5 Z"
            fill="#A897CE"
            opacity="0.7"
          />
          <path
            d="M25,15 C20,17 15,25 17,35 C12,45 18,55 25,58 C32,55 38,45 33,35 C35,25 30,17 25,15 Z"
            fill="#E5E2EF"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Shine 1 - Top left small */}
      <div
        data-flower="shine-1"
        className="absolute"
        style={{ left: '8%', top: '15%', transform: 'rotate(45deg)' }}
      >
        <div style={{ transform: 'scale(0.4)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 2 - Top right small */}
      <div
        data-flower="shine-2"
        className="absolute"
        style={{ left: '88%', top: '12%', transform: 'rotate(-30deg)' }}
      >
        <div style={{ transform: 'scale(0.3)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 3 - Middle left */}
      <div
        data-flower="shine-3"
        className="absolute"
        style={{ left: '5%', top: '35%', transform: 'rotate(60deg)' }}
      >
        <div style={{ transform: 'scale(0.5)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 4 - Middle right */}
      <div
        data-flower="shine-4"
        className="absolute"
        style={{ left: '92%', top: '38%', transform: 'rotate(-45deg)' }}
      >
        <div style={{ transform: 'scale(0.4)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 5 - Center top */}
      <div
        data-flower="shine-5"
        className="absolute"
        style={{ left: '50%', top: '8%', transform: 'rotate(15deg)' }}
      >
        <div style={{ transform: 'scale(0.3)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 6 - Center bottom */}
      <div
        data-flower="shine-6"
        className="absolute"
        style={{ left: '48%', top: '85%', transform: 'rotate(-60deg)' }}
      >
        <div style={{ transform: 'scale(0.4)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 7 - Left side middle */}
      <div
        data-flower="shine-7"
        className="absolute"
        style={{ left: '12%', top: '55%', transform: 'rotate(75deg)' }}
      >
        <div style={{ transform: 'scale(0.35)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 8 - Right side middle */}
      <div
        data-flower="shine-8"
        className="absolute"
        style={{ left: '85%', top: '62%', transform: 'rotate(-15deg)' }}
      >
        <div style={{ transform: 'scale(0.45)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 9 - Bottom left */}
      <div
        data-flower="shine-9"
        className="absolute"
        style={{ left: '15%', top: '75%', transform: 'rotate(30deg)' }}
      >
        <div style={{ transform: 'scale(0.3)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 10 - Bottom right */}
      <div
        data-flower="shine-10"
        className="absolute"
        style={{ left: '82%', top: '78%', transform: 'rotate(-75deg)' }}
      >
        <div style={{ transform: 'scale(0.4)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 11 - Upper middle left */}
      <div
        data-flower="shine-11"
        className="absolute"
        style={{ left: '25%', top: '25%', transform: 'rotate(-45deg)' }}
      >
        <div style={{ transform: 'scale(0.35)' }}>
          <Shine />
        </div>
      </div>

      {/* Shine 12 - Upper middle right */}
      <div
        data-flower="shine-12"
        className="absolute"
        style={{ left: '75%', top: '28%', transform: 'rotate(45deg)' }}
      >
        <div style={{ transform: 'scale(0.3)' }}>
          <Shine />
        </div>
      </div>
    </div>
  );
}
