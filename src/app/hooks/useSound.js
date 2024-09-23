"use client"

import { useCallback } from 'react';

export function useSound() {
  const playSound = useCallback((soundName) => {
    const audio = new Audio(`/sounds/${soundName}.mp3`);
    audio.play().catch(error => console.error('Error playing sound:', error));
  }, []);

  return playSound;
}