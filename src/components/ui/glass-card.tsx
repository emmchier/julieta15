import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-lg bg-white/15 border border-white/30 rounded-3xl shadow-xl w-full ${className}`}
      style={{
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        minWidth: '320px',
      }}
    >
      {children}
    </div>
  );
}
