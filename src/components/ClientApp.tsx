'use client';

import React, { useState, useEffect } from 'react';
import {
  ParallaxFlowers,
  HeaderSection,
  DateSection,
  LocationSection,
  DressCodeSection,
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
  const [comentarios, setComentarios] = useState('');

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  // Button handlers
  const handleEnviarWhatsapp = () => {
    let summary = '';
    if (asistencia === 'No puedo ir :(') {
      summary = 'Hola! No podré ir al cumple :( ';
    } else {
      const restriccionesText = restricciones.trim()
        ? `. Restricción alimenticia: ${restricciones.trim()}`
        : '';
      const comentariosText = comentarios.trim()
        ? `. Otros comentarios: ${comentarios.trim()}`
        : '';
      summary = `Hola! Te confirmo la asistencia de: ${invitados.trim()}${restriccionesText}${comentariosText}. Nos vemos ahí :) !`;
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
    asistencia === 'No puedo ir :(' || invitados.trim() !== '';

  return (
    <div className="w-full bg-[#F3F1FC]">
      <ParallaxFlowers />

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
        comentarios={comentarios}
        setComentarios={setComentarios}
        handleEnviarWhatsapp={handleEnviarWhatsapp}
        isFormValid={isFormValid}
      />

      {/* Section 6 - Countdown */}
      <CountdownSection timeLeft={timeLeft} />

      {/* Section 7 - Closing */}
      <ClosingSection />
    </div>
  );
}
