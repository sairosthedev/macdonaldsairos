import React, { useMemo } from 'react';
import styles from './RainEffect.module.css';

const RainEffect = () => {
  const raindrops = useMemo(() => {
    return [...Array(150)].map((_, index) => ({
      left: `${Math.random() * 100}%`,
      duration: 0.8 + Math.random() * 0.7,
      delay: Math.random() * 2,
      height: 15 + Math.random() * 15,
      opacity: 0.1 + Math.random() * 0.4
    }));
  }, []);

  return (
    <div className={styles.rainContainer}>
      {raindrops.map((drop, index) => (
        <div
          key={index}
          className={styles.raindrop}
          style={{
            left: drop.left,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            height: `${drop.height}px`,
            opacity: drop.opacity
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;