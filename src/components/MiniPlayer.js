import React from 'react';
import { useMusic } from '../context/MusicContext';
import styles from './MiniPlayer.module.css';

const MiniPlayer = () => {
  const { currentTrack, isPlaying, togglePlay, next, prev } = useMusic();

  if (!currentTrack) return null;

  return (
    <div className={styles.player}>
      <span className={styles.trackTitle}>{currentTrack.title}</span>
      <div className={styles.controls}>
        {/* Botón Anterior */}
        <button onClick={prev} className={`${styles.btn} ${styles.sideBtn}`} title="Anterior">
          ⏮️
        </button>

        {/* Botón Play / Pause */}
        <button onClick={togglePlay} className={styles.playBtn}>
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        {/* Botón Siguiente */}
        <button onClick={next} className={`${styles.btn} ${styles.sideBtn}`} title="Siguiente">
          ⏭️
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;