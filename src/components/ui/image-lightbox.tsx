'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageLightboxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Delay para que la animación de entrada sea suave
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center transition-all duration-300 ease-out ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
      onClick={onClose}
    >
      {/* Close button - arriba de la imagen, costado derecho */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[1000000] bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-200"
        aria-label="Cerrar imagen"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ease-out ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={800}
          className="w-full h-auto rounded-2xl shadow-2xl"
          style={{
            borderRadius: '16px',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
    </div>,
    document.body
  );
}
