import React from 'react';
import styles from './RainEffect.module.css';

const RainEffect = () => {
  return (
    <div className={styles.rainContainer}>
      {[...Array(100)].map((_, index) => (
        <div key={index} className={styles.raindrop} style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${0.5 + Math.random() * 0.5}s`,
          animationDelay: `${Math.random() * 2}s`
        }}></div>
      ))}
    </div>
  );
};

export default RainEffect;