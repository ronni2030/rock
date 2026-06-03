import { createContext, useContext, useRef, useState, useCallback } from 'react';

const MusicContext = createContext();

// Tu playlist original, ahora con objetos {title, src}
const ALL_TRACKS = [
  { title: 'acdc1.mp3', src: '/Musicas/acdc1.mp3' },
  { title: 'acdc2.mp3', src: '/Musicas/acdc2.mp3' },
  { title: 'acdc3.mp3', src: '/Musicas/acdc3.mp3' },
  { title: 'acdc4.mp3', src: '/Musicas/acdc4.mp3' },
  { title: 'acdc5.mp3', src: '/Musicas/acdc5.mp3' },
  { title: 'acdc6.mp3', src: '/Musicas/acdc6.mp3' },
  { title: 'acdc7.mp3', src: '/Musicas/acdc7.mp3' },

  { title: 'queen1.mp3', src: '/Musicas/queen1.mp3' },
  { title: 'queen2.mp3', src: '/Musicas/queen2.mp3' },

  { title: 'ozzy1.mp3', src: '/Musicas/ozzy1.mp3' },
  { title: 'ozzy2.mp3', src: '/Musicas/ozzy2.mp3' },
  { title: 'ozzy3.mp3', src: '/Musicas/ozzy3.mp3' },
  { title: 'ozzy4.mp3', src: '/Musicas/ozzy4.mp3' },
  { title: 'ozzy5.mp3', src: '/Musicas/ozzy5.mp3' },
  { title: 'ozzy6.mp3', src: '/Musicas/ozzy6.mp3' },
  { title: 'ozzy7.mp3', src: '/Musicas/ozzy7.mp3' },

  { title: 'kiss1.mp3', src: '/Musicas/kiss1.mp3' },
  { title: 'kiss2.mp3', src: '/Musicas/kiss2.mp3' },
  { title: 'kiss3.mp3', src: '/Musicas/kiss3.mp3' },
  { title: 'kiss4.mp3', src: '/Musicas/kiss4.mp3' },
  { title: 'kiss5.mp3', src: '/Musicas/kiss5.mp3' },

  { title: 'ironmaiden1.mp3', src: '/Musicas/ironmaiden1.mp3' },
  { title: 'ironmaiden2.mp3', src: '/Musicas/ironmaiden2.mp3' },
  { title: 'ironmaiden3.mp3', src: '/Musicas/ironmaiden3.mp3' },
  { title: 'ironmaiden4.mp3', src: '/Musicas/ironmaiden4.mp3' },
  { title: 'ironmaiden5.mp3', src: '/Musicas/ironmaiden5.mp3' },

  { title: 'blacksabbath1.mp3', src: '/Musicas/blacksabbath1.mp3' },
  { title: 'blacksabbath2.mp3', src: '/Musicas/blacksabbath2.mp3' },
  { title: 'blacksabbath3.mp3', src: '/Musicas/blacksabbath3.mp3' },
  { title: 'blacksabbath4.mp3', src: '/Musicas/blacksabbath4.mp3' },
];

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reproducir una canción específica
  const play = useCallback((track) => {
    if (!track) return;
    if (currentTrack?.src !== track.src) {
      audioRef.current.src = track.src;
      setCurrentTrack(track);
    }
    audioRef.current.play().then(() => setIsPlaying(true));
  }, [currentTrack]);

  const pause = useCallback(() => {
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else if (currentTrack) {
      audioRef.current.play().then(() => setIsPlaying(true));
    }
  }, [isPlaying, pause, currentTrack]);

  const next = useCallback(() => {
    if (!currentTrack) return;
    const idx = ALL_TRACKS.findIndex(t => t.src === currentTrack.src);
    const nextIdx = (idx + 1) % ALL_TRACKS.length;
    play(ALL_TRACKS[nextIdx]);
  }, [currentTrack, play]);

  const prev = useCallback(() => {
    if (!currentTrack) return;
    const idx = ALL_TRACKS.findIndex(t => t.src === currentTrack.src);
    const prevIdx = (idx - 1 + ALL_TRACKS.length) % ALL_TRACKS.length;
    play(ALL_TRACKS[prevIdx]);
  }, [currentTrack, play]);

  // Cuando termina una canción, pasa a la siguiente
  audioRef.current.onended = () => {
    next();
  };

  const value = {
    currentTrack,
    isPlaying,
    play,
    pause,
    togglePlay,
    next,
    prev,
    allTracks: ALL_TRACKS,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);