import React from 'react';
import { ClientApp } from '../components';

// Server-side data configuration
const EVENT_CONFIG = {
  // Event details
  targetDate: '2025-12-13T21:00:00-03:00', // December 13, 2025 at 21:00 Buenos Aires time
  whatsappNumber: '5492216781108',

  // Calendar event configuration
  calendarEvent: {
    title: 'Cumple de 15 de Juli Chierchie',
    startDate: '20251213T210000',
    endDate: '20251214T050000',
    location: 'Darwin 1351, CABA',
  },

  // Maps location configuration
  mapsLocation: {
    address: 'Darwin 1351, CABA',
    mapsUrl: 'https://maps.app.goo.gl/6cpaVBF1th89nX137',
  },

  // Form initial values
  initialFormValues: {
    asistencia: 'Si, confirmo!',
    invitados: '',
    restricciones: '',
  },
};

export default function Home() {
  return (
    <ClientApp
      initialAsistencia={EVENT_CONFIG.initialFormValues.asistencia}
      initialInvitados={EVENT_CONFIG.initialFormValues.invitados}
      initialRestricciones={EVENT_CONFIG.initialFormValues.restricciones}
      targetDate={EVENT_CONFIG.targetDate}
      whatsappNumber={EVENT_CONFIG.whatsappNumber}
      calendarEvent={EVENT_CONFIG.calendarEvent}
      mapsLocation={EVENT_CONFIG.mapsLocation}
    />
  );
}
