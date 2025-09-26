'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  HeaderSection,
  DateSection,
  LocationSection,
  DressCodeSection,
  MusicSection,
  RSVPSection,
  CountdownSection,
  ClosingSection,
} from './index';

interface ClientAppProps {
  // Props que vienen del servidor
  initialAsistencia?: string;
  initialInvitados?: string;
  initialRestricciones?: string;
  targetDate?: string; // Fecha objetivo para el countdown
  whatsappNumber?: string; // Número de WhatsApp
  calendarEvent?: {
    title: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  mapsLocation?: {
    address: string;
    mapsUrl: string;
  };
}

export function ClientApp({
  initialAsistencia = 'Si, confirmo!',
  initialInvitados = '',
  initialRestricciones = '',
  targetDate = '2025-12-13T21:00:00-03:00',
  whatsappNumber = '5492216781108',
  calendarEvent = {
    title: 'Cumple de 15 de Juli Chierchie',
    startDate: '20251213T210000',
    endDate: '20251214T050000',
    location: 'Darwin 1351, CABA',
  },
  mapsLocation = {
    address: 'Darwin 1351, CABA',
    mapsUrl: 'https://maps.app.goo.gl/6cpaVBF1th89nX137',
  },
}: ClientAppProps) {
  // Form state
  const [asistencia, setAsistencia] = useState(initialAsistencia);
  const [invitados, setInvitados] = useState(initialInvitados);
  const [restricciones, setRestricciones] = useState(initialRestricciones);
  const [otrasIndicaciones, setOtrasIndicaciones] = useState('');

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Audio state
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Parallax state
  const [scrollY, setScrollY] = useState(0);

  // Fade in state
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate time until target date
  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate);
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Audio control effect
  useEffect(() => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.play().catch(() => {
          // Silently fail if blocked
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  // Toggle audio function
  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade in effect on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Button handlers
  const handleEnviarWhatsapp = () => {
    let summary = '';
    if (asistencia === 'No puedo ir :(') {
      summary = `Soy/somos ${invitados.trim()}. Perdón, no puedo ir :(`;
    } else {
      summary =
        `Soy/somos ${invitados.trim()} Sí, asistencia confirmada!` +
        (restricciones.trim()
          ? `. Restricción alimenticia: ${restricciones.trim()}.`
          : `.`) +
        (otrasIndicaciones.trim()
          ? ` Otras indicaciones: ${otrasIndicaciones.trim()}.`
          : `.`);
    }
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAgendarEvento = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarEvent.title)}&dates=${calendarEvent.startDate}/${calendarEvent.endDate}&ctz=America/Argentina/Buenos_Aires&location=${encodeURIComponent(calendarEvent.location)}`;
    window.open(calendarUrl, '_blank');
  };

  const handleVerUbicacion = () => {
    window.open(mapsLocation.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  const isFormValid = invitados.trim() !== '';

  return (
    <div
      className={`w-full max-w-full mx-auto relative transition-opacity duration-1000 ease-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Video with Parallax */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover z-0 transition-opacity duration-1000"
        style={{
          width: '100vw',
          height: '200vh',
          filter: 'brightness(1.2) contrast(1.1)',
          transform: `translateY(${scrollY * 0.05}px) translateY(-50%)`,
          willChange: 'transform',
        }}
        onEnded={e => {
          // Fade out effect when video ends
          e.currentTarget.style.opacity = '0.3';
          setTimeout(() => {
            e.currentTarget.style.opacity = '1';
          }, 200);
        }}
      >
        <source src="/background-animate.mp4" type="video/mp4" />
      </video>

      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/high-destiny.mp3" type="audio/mpeg" />
      </audio>

      {/* Audio Control Button */}
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-200"
        aria-label={isAudioPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isAudioPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Section 1 - Header */}
        <HeaderSection />

        {/* Section 2 - Date & Agendar */}
        <DateSection onAgendarEvento={handleAgendarEvento} />

        {/* Section 3 - Location */}
        <LocationSection onVerUbicacion={handleVerUbicacion} />

        {/* Section 4 - Dress Code */}
        <DressCodeSection />

        {/* Section 5 - RSVP Form */}
        <RSVPSection
          asistencia={asistencia}
          setAsistencia={setAsistencia}
          invitados={invitados}
          setInvitados={setInvitados}
          restricciones={restricciones}
          setRestricciones={setRestricciones}
          otrasIndicaciones={otrasIndicaciones}
          setOtrasIndicaciones={setOtrasIndicaciones}
          handleEnviarWhatsapp={handleEnviarWhatsapp}
          isFormValid={isFormValid}
        />

        {/* Section 6 - Music */}
        <MusicSection />

        {/* Section 7 - Countdown */}
        <CountdownSection timeLeft={timeLeft} />

        {/* Section 8 - Closing */}
        <ClosingSection />
      </div>
    </div>
  );
}
