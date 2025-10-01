'use client';

import React, { useState, useEffect } from 'react';
import { Julieta } from './svg';

interface HeaderProps {
  onToggleAudio?: () => void;
  isAudioPlaying?: boolean;
}

export function Header({ onToggleAudio, isAudioPlaying = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.15; // 15vh

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9998] h-auto px-6 sm:px-8 pt-4 pb-4 flex transition-all duration-500 bg-transparent pointer-events-auto">
      {/* Left side - XV + Julieta (appears on scroll) */}
      <div
        className={`flex items-center gap-2 transition-all duration-500 ${
          isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
      >
        <div
          className="text-3xl font-bold transition-all duration-300"
          style={{
            fontFamily: 'Arial, sans-serif',
            color: '#FFFFFF',
            textShadow: '0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF',
            letterSpacing: '-0.05em',
          }}
        >
          XV
        </div>
        <div className="w-16 h-16">
          <Julieta width={64} height={64} color="#F3A8F8" />
        </div>
      </div>

      {/* Center/Right - Audio button */}
      <div
        className={`flex items-center transition-all duration-500 ${
          isScrolled
            ? 'ml-auto opacity-100 translate-x-0'
            : 'absolute left-1/2 transform -translate-x-1/2 opacity-100'
        }`}
      >
        <button
          onClick={onToggleAudio}
          className="bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 flex items-center relative overflow-visible"
          style={{
            height: '48px',
            fontFamily: 'Quando, serif',
            fontSize: '16px',
            color: '#FFFFFF',
            paddingLeft: isMobile ? '12px' : '16px',
            paddingRight: isMobile ? '12px' : '16px',
            gap: '4px',
          }}
          aria-label={isAudioPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          {(!isMobile || !isScrolled) && (
            <span>{isAudioPlaying ? 'Pausar' : '¡Dale Play!'}</span>
          )}
          {isAudioPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
