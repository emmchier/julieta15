'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, GlassCard, ImageLightbox } from '../ui';
import { Divider, Location } from '../svg';

interface LocationSectionProps {
  onVerUbicacion: () => void;
}

export function LocationSection({ onVerUbicacion }: LocationSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="min-h-[100vh] flex items-center justify-center relative py-12">
      <GlassCard className="glass-card-desktop">
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
                color: '#FFFFFF',
                fontSize: '18px',
              }}
            >
              El lugar
            </p>
            <div className="my-2">
              <h2
                style={{
                  fontFamily: 'Purple Purse, cursive',
                  color: '#E879F9',
                  fontSize: '36px',
                }}
                className="uppercase"
              >
                JANO&apos;S DARWIN 2
              </h2>
            </div>
            <div className="my-2">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#FFFFFF',
                  fontSize: '20px',
                }}
              >
                DARWIN 1351 | CABA
              </p>
            </div>
            <div className="mt-4">
              <Image
                src="/salon.jpeg"
                alt="Salón Jano's Darwin 2"
                width={400}
                height={300}
                className="w-full rounded-2xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
                style={{ borderRadius: '16px' }}
                onClick={() => setIsLightboxOpen(true)}
              />
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
              className="h-12 px-3 sm:px-6 border-[#FFFFFF] bg-transparent hover:bg-white/20 active:bg-white/30 text-[#FFFFFF] font-normal tracking-[0.1em] uppercase"
              style={{
                fontFamily: 'Quando, serif',
                fontSize: '14px',
              }}
            >
              Ver ubicación
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Image Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc="/salon.jpeg"
        imageAlt="Salón Jano's Darwin 2"
      />
    </div>
  );
}
