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
import { OptimizedBackground } from './OptimizedBackground';
import { Header } from './Header';

interface ClientAppProps {
  // Props que vienen del servidor
  initialAsistencia: string;
  initialInvitados: string;
  initialRestricciones: string;
  targetDate: string; // Fecha objetivo para el countdown
  whatsappNumber: string; // Número de WhatsApp
  calendarEvent: {
    title: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  mapsLocation: {
    address: string;
    mapsUrl: string;
  };
}

export function ClientApp({
  initialAsistencia,
  initialInvitados,
  initialRestricciones,
  targetDate,
  whatsappNumber,
  calendarEvent,
  mapsLocation,
}: ClientAppProps) {
  // Form state
  const [asistencia, setAsistencia] = useState(initialAsistencia);
  const [invitados, setInvitados] = useState(initialInvitados);
  const [restricciones, setRestricciones] = useState(initialRestricciones);

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

  // Removed parallax state

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

  // Removed parallax scroll effect

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
      summary = 'Perdón, no puedo ir :(';
    } else {
      summary =
        `Hola! Soy ${invitados.trim()} y confirmo asistencia` +
        (restricciones.trim()
          ? `. Restricción alimenticia: ${restricciones.trim()}.`
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

  const isFormValid =
    asistencia === 'No puedo ir :(' ? true : invitados.trim() !== '';

  return (
    <div
      className={`w-full max-w-full mx-auto relative transition-opacity duration-1000 ease-out overflow-x-hidden ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Optimized Background with iOS support */}
      <OptimizedBackground
        videoSrc="/background-animate.mp4"
        fallbackImageSrc="/static-background.png"
      />

      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/high-destiny.mp3" type="audio/mpeg" />
      </audio>

      {/* Fixed Header */}
      <Header onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

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
