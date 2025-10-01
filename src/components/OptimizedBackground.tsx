'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedBackgroundProps {
  videoSrc: string;
  fallbackImageSrc: string;
  className?: string;
}

export function OptimizedBackground({
  videoSrc,
  fallbackImageSrc,
  className = '',
}: OptimizedBackgroundProps) {
  return (
    <>
      {/* Fallback Image - Hidden by default, only shows if video fails */}
      <div
        className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-0"
        style={{
          backgroundImage: `url(${fallbackImageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
          filter: 'brightness(1.2) contrast(1.1)',
        }}
      />

      {/* Video - Starts immediately */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`fixed top-0 left-0 w-full h-full object-cover z-0 ${className}`}
        style={{
          width: '100%',
          height: '100vh',
          filter: 'brightness(1.2) contrast(1.1)',
        }}
        onError={e => {
          // If video fails, show fallback image
          const fallback = e.currentTarget
            .previousElementSibling as HTMLElement;
          if (fallback) {
            fallback.style.opacity = '1';
          }
        }}
        onEnded={e => {
          // Fade out effect when video ends
          e.currentTarget.style.opacity = '0.3';
          setTimeout(() => {
            e.currentTarget.style.opacity = '1';
          }, 200);
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <Image
          src={fallbackImageSrc}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </video>

      {/* Global gradient overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full z-1"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
    </>
  );
}
