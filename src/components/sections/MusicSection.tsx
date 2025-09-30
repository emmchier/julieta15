'use client';

import React from 'react';
import { Music } from '../svg';
import { GlassCard, Button } from '../ui';

export function MusicSection() {
  const handleSpotifyClick = () => {
    window.open(
      'https://open.spotify.com/playlist/0necHFEgbvhfbmMxar88IJ?si=iRa7kyaERG-fTVpQZB3BHg&pt=e9196bd8f7315806208f35f2026d7d8e&pi=V66SyPYrQh-Lq',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <GlassCard className="glass-card-desktop">
        <div className="section-content text-center">
          <div className="flex justify-center mb-8">
            <div className="svg-icon-responsive">
              <Music />
            </div>
          </div>

          <div className="mb-8">
            <p
              style={{
                fontFamily: 'Quando, serif',
                color: '#FFFFFF',
                fontSize: '16px',
              }}
            >
              Te invito a
            </p>
            <div className="my-2">
              <h2
                style={{
                  fontFamily: 'Purple Purse, cursive',
                  color: '#E879F9',
                  fontSize: '27.1px',
                  fontWeight: '500',
                }}
              >
                SUMAR TUS CANCIONES
              </h2>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSpotifyClick}
              variant="outline"
              className="h-12 px-3 sm:px-6 border-[#FFFFFF] bg-transparent hover:bg-white/20 active:bg-white/30 text-[#FFFFFF] font-normal tracking-[0.1em] uppercase"
              style={{
                fontFamily: 'Quando, serif',
                fontSize: '14px',
              }}
            >
              en Spotify
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
