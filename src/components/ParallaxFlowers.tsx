'use client';

import React, { useEffect } from 'react';
import { Shine } from './svg';
import {
  FlowerLeft1,
  PetalosLeft1,
  FlowerLeft2,
  FlowerLeft3,
  FlowerRight1,
  PetalosRight1,
  FlowerRight2,
  FlowerRight3,
} from './flowers';

export function ParallaxFlowers() {
  useEffect(() => {
    const flowers = document.querySelectorAll('[data-flower]');
    if (!flowers.length) return;

    const flowerSpeeds = {
      'flower-left-1': 0.02,
      'petalos-left-1': 0.025,
      'petalos-left-2': 0.03,
      'petalos-left-3': 0.035,
      'flower-left-2': 0.04,
      'flower-left-3': 0.022,
      'petalos-center': 0.027,
      'flower-right-1': 0.032,
      'petalos-right-1': 0.037,
      'flower-right-2': 0.042,
      'flower-right-3': 0.018,
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

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          flowers.forEach(flower => {
            const id = flower.getAttribute('data-flower') || '';
            const speed =
              flowerSpeeds[id as keyof typeof flowerSpeeds] || 0.025;
            const target = window.scrollY * speed;
            // Aplicar directamente la posición sin easing para evitar el movimiento inicial
            (flower as HTMLElement).style.transform =
              `translate3d(0, ${target}px, 0)`;
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
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] overflow-hidden">
      {/* FlowerLeft1 - Arriba a la izquierda, fuera de campo, asomando solamente la mitad de abajo y la mitad de la derecha */}
      <div
        data-flower="flower-left-1"
        className="absolute -left-[13%] lg:left-[5%] -top-[7%] translate-y-[30px] rotate-[15deg] scale-100 lg:scale-200"
      >
        <FlowerLeft1 />
      </div>

      {/* PetalosLeft1 - Arriba a la izquierda, un poco por debajo de FlowerLeft1, se pierde fuera de campo la mitad por la izquierda */}
      <div
        data-flower="petalos-left-1"
        className="absolute left-[-10%] lg:left-[3.5%] top-[2%] translate-y-[70px] -rotate-[5deg] scale-100 lg:scale-200"
      >
        <PetalosLeft1 />
      </div>

      {/* FlowerLeft2 - A la derecha de FlowerLeft1, un poco más metida hacia arriba y fuera de campo en el top */}
      <div
        data-flower="flower-left-2"
        className="absolute left-[20px] lg:left-[60px] -top-[180px] translate-y-[30px] rotate-[45deg] scale-100 lg:scale-200"
      >
        <FlowerLeft2 />
      </div>

      {/* FlowerLeft3 - Justo debajo de FlowerLeft2, escondida por detras de esta pero en la parte de abajo */}
      <div
        data-flower="flower-left-3"
        className="absolute -left-[10%] lg:left-[8%] -top-[10%] translate-y-[30px] -rotate-[35deg] scale-100 lg:scale-200"
      >
        <FlowerLeft3 />
      </div>

      <div
        data-flower="flower-left-3"
        className="absolute right-[10%] -top-[100px] translate-y-[30px] -rotate-[35deg] scale-100 lg:scale-200"
      >
        <FlowerRight1 />
      </div>

      {/* FlowerRight1 - A unos 30% del right de la pantalla, a la misma altura que FlowerLeft1 */}
      <div
        data-flower="flower-right-1"
        className="absolute -right-[10%] -top-[8%] translate-y-[30px] -rotate-[10deg] scale-100 lg:scale-200"
      >
        <PetalosRight1 />
      </div>

      {/* PetalosRight1 - Un poco más abajo que FlowerRight1, casi exactamente en la esquina superior derecha de la pantalla */}
      <div
        data-flower="petalos-right-1"
        className="absolute -right-[35px] top-[10px] translate-y-[30px] scale-100 lg:scale-200"
      >
        <FlowerRight1 />
      </div>

      {/* FlowerRight2 - A la misma altura que PetalosRight1. Fuera de campo hacia la derecha de la pantalla */}
      <div
        data-flower="flower-right-2"
        className="absolute left-[110%] top-[5%] translate-y-[30px] -rotate-[20deg] scale-100 lg:scale-200"
      >
        <FlowerRight2 />
      </div>

      {/* FlowerRight3 - Debajo de FlowerRight2, a unos 100px de esta, fuera de campo por la derecha asomando una parte de la mitad izquierda */}
      <div
        data-flower="flower-right-3"
        className="absolute left-[105%] top-[20%] translate-y-[30px] rotate-[10deg] scale-100 lg:scale-200"
      >
        <FlowerRight3 />
      </div>

      {/* Shine 1 - Top left small */}
      <div
        data-flower="shine-1"
        className="absolute left-[8%] top-[15%] translate-y-[30px] rotate-[45deg]"
      >
        <div className="scale-[0.4]">
          <Shine />
        </div>
      </div>

      {/* Shine 2 - Top right small */}
      <div
        data-flower="shine-2"
        className="absolute left-[88%] top-[12%] translate-y-[30px] -rotate-[30deg]"
      >
        <div className="scale-[0.3]">
          <Shine />
        </div>
      </div>

      {/* Shine 3 - Middle left */}
      <div
        data-flower="shine-3"
        className="absolute left-[5%] top-[35%] translate-y-[30px] rotate-[60deg]"
      >
        <div className="scale-[0.5]">
          <Shine />
        </div>
      </div>

      {/* Shine 4 - Middle right */}
      <div
        data-flower="shine-4"
        className="absolute left-[92%] top-[38%] translate-y-[30px] -rotate-[45deg]"
      >
        <div className="scale-[0.4]">
          <Shine />
        </div>
      </div>

      {/* Shine 5 - Center top */}
      <div
        data-flower="shine-5"
        className="absolute left-[50%] top-[8%] translate-y-[30px] rotate-[15deg]"
      >
        <div className="scale-[0.3]">
          <Shine />
        </div>
      </div>

      {/* Shine 6 - Center bottom */}
      <div
        data-flower="shine-6"
        className="absolute left-[48%] top-[85%] translate-y-[30px] -rotate-[60deg]"
      >
        <div className="scale-[0.4]">
          <Shine />
        </div>
      </div>

      {/* Shine 7 - Left side middle */}
      <div
        data-flower="shine-7"
        className="absolute left-[12%] top-[55%] translate-y-[30px] rotate-[75deg]"
      >
        <div className="scale-[0.35]">
          <Shine />
        </div>
      </div>

      {/* Shine 8 - Right side middle */}
      <div
        data-flower="shine-8"
        className="absolute left-[85%] top-[62%] translate-y-[30px] -rotate-[15deg]"
      >
        <div className="scale-[0.45]">
          <Shine />
        </div>
      </div>

      {/* Shine 9 - Bottom left */}
      <div
        data-flower="shine-9"
        className="absolute left-[15%] top-[75%] translate-y-[30px] rotate-[30deg]"
      >
        <div className="scale-[0.3]">
          <Shine />
        </div>
      </div>

      {/* Shine 10 - Bottom right */}
      <div
        data-flower="shine-10"
        className="absolute left-[82%] top-[78%] translate-y-[30px] -rotate-[75deg]"
      >
        <div className="scale-[0.4]">
          <Shine />
        </div>
      </div>

      {/* Shine 11 - Upper middle left */}
      <div
        data-flower="shine-11"
        className="absolute left-[25%] top-[25%] translate-y-[30px] -rotate-[45deg]"
      >
        <div className="scale-[0.35]">
          <Shine />
        </div>
      </div>

      {/* Shine 12 - Upper middle right */}
      <div
        data-flower="shine-12"
        className="absolute left-[75%] top-[28%] translate-y-[30px] rotate-[45deg]"
      >
        <div className="scale-[0.3]">
          <Shine />
        </div>
      </div>
    </div>
  );
}
