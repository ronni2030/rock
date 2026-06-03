import React from 'react';
import { useMusic } from '../context/MusicContext';
import styles from './MiniPlayer.module.css';

const MiniPlayer = () => {
  const { currentTrack, isPlaying, togglePlay, next, prev } = useMusic();

  if (!currentTrack) return null; // No se muestra si no hay canción

  return (
    <div className={styles.miniPlayer}>
      <span className={styles.trackName}>{currentTrack.title}</span>
      <div className={styles.controls}>
        <button onClick={prev} title="Anterior">⏮️</button>
        <button onClick={togglePlay} title={isPlaying ? 'Pausar' : 'Reproducir'}>
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button onClick={next} title="Siguiente">⏭️</button>
      </div>
    </div>
  );
};

export default MiniPlayer;