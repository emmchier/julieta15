'use client';

import React, { useState } from 'react';
import { Divider, Music } from '../svg';
import { GlassCard, Button, Textarea } from '../ui';

export function MusicSection() {
  const [canciones, setCanciones] = useState('');

  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="w-full max-w-[360px] mx-auto px-5 lg:px-0 section-container-desktop">
        <GlassCard className="p-8 glass-card-desktop">
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
                  fontSize: '18px',
                }}
              >
                No hay fiesta sin buena música
              </p>
              <div className="my-2">
                <h2
                  style={{
                    fontFamily: 'Purple Purse, cursive',
                    color: '#E879F9',
                    fontSize: '36px',
                  }}
                >
                  ¿QUÉ CANCIÓN NO PUEDE FALTAR?
                </h2>
              </div>
            </div>

            <div className="mb-8">
              <div className="form-group">
                <label
                  htmlFor="canciones"
                  className="form-label text-left"
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    marginBottom: '8px',
                    display: 'block',
                  }}
                >
                  Lista de canciones
                </label>
                <Textarea
                  id="canciones"
                  value={canciones}
                  onChange={e => setCanciones(e.target.value)}
                  placeholder="Escribe tus canciones favoritas..."
                  className="w-full min-h-[80px] resize-none"
                  style={{
                    fontFamily: 'Quando, serif',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    backgroundColor: 'transparent',
                    border: '1px solid #FFFFFF',
                    borderRadius: '8px',
                    padding: '12px',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="svg-icon-responsive">
                <Divider />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p
                style={{
                  fontFamily: 'Quando, serif',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  marginBottom: '8px',
                }}
              >
                Sumá tus canciones
              </p>
              <Button
                variant="outline"
                className="h-10 px-4 border-[#FFFFFF] bg-transparent hover:bg-white/20 active:bg-white/30 text-[#FFFFFF] font-normal tracking-[0.1em] uppercase"
                style={{
                  fontFamily: 'Quando, serif',
                  fontSize: '12px',
                }}
              >
                Lista de Spotify
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
