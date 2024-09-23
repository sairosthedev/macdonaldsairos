"use client"

import React from 'react';
import useSound from 'use-sound';

const SoundProvider = ({ children }) => {
  const [playSound] = useSound('/sounds/inspo.mp3', { 
    volume: 0.5,
    sprite: {
      click: [0, 1000], // Adjust these values based on your sound file
    }
  });

  const handlePlaySound = () => {
    playSound({ id: 'click' });
  };

  return React.Children.map(children, child =>
    React.cloneElement(child, { playSound: handlePlaySound })
  );
};

export default SoundProvider;