import React, { useState, useRef } from 'react';
import styles from './Home.module.css';

// 📸 imágenes locales (corrige la ruta según tu estructura)
import acdc from "../images/Home/acdc.jpg";
import ozzy from "../images/Home/ozzy.jpeg";
import kiss from "../images/Home/kiss.jpg";
import ironmaiden from "../images/Home/ironmaiden.jpg";
import blacksabbath from "../images/Home/blacksabbath.jpg";
import queen from "../images/Home/queen.jpg";

const Card = ({ title, image, link }) => (
    <a href={link} className={styles.card}>
        <img src={image} alt={title} className={styles.card__img} />
        <span className={styles.card__footer}>{title}</span>
    </a>
);

const Home = () => {

    const audioRef = useRef(null);

    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // 🎧 PLAYLIST (desde public/Musicas)
    const playlist = [
        "/Musicas/acdc1.mp3",
        "/Musicas/acdc2.mp3",
        "/Musicas/acdc3.mp3",
        "/Musicas/acdc4.mp3",
        "/Musicas/acdc5.mp3",
        "/Musicas/acdc6.mp3",
        "/Musicas/acdc7.mp3",

        "/Musicas/queen1.mp3",
        "/Musicas/queen2.mp3",

        "/Musicas/ozzy1.mp3",
        "/Musicas/ozzy2.mp3",
        "/Musicas/ozzy3.mp3",
        "/Musicas/ozzy4.mp3",
        "/Musicas/ozzy5.mp3",
        "/Musicas/ozzy6.mp3",
        "/Musicas/ozzy7.mp3",

        "/Musicas/kiss1.mp3",
        "/Musicas/kiss2.mp3",
        "/Musicas/kiss3.mp3",
        "/Musicas/kiss4.mp3",
        "/Musicas/kiss5.mp3",

        "/Musicas/ironmaiden1.mp3",
        "/Musicas/ironmaiden2.mp3",
        "/Musicas/ironmaiden3.mp3",
        "/Musicas/ironmaiden4.mp3",
        "/Musicas/ironmaiden5.mp3",

        "/Musicas/blacksabbath1.mp3",
        "/Musicas/blacksabbath2.mp3",
        "/Musicas/blacksabbath3.mp3",
        "/Musicas/blacksabbath4.mp3",
    ];

    // ▶️ reproducir
    const play = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.src = playlist[index];
        audio.play().catch(() => {});
        setIsPlaying(true);
    };

    // ⏸ pausa
    const pause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        setIsPlaying(false);
    };

    // ⏭ siguiente
    const next = () => {
        const newIndex = (index + 1) % playlist.length;
        setIndex(newIndex);

        const audio = audioRef.current;
        audio.src = playlist[newIndex];
        audio.play().catch(() => {});
        setIsPlaying(true);
    };

    // ⏮ anterior
    const prev = () => {
        const newIndex = (index - 1 + playlist.length) % playlist.length;
        setIndex(newIndex);

        const audio = audioRef.current;
        audio.src = playlist[newIndex];
        audio.play().catch(() => {});
        setIsPlaying(true);
    };

    // 🔁 cuando termina una canción
    const handleEnd = () => {
        const newIndex = (index + 1) % playlist.length;
        setIndex(newIndex);

        const audio = audioRef.current;
        audio.src = playlist[newIndex];
        audio.play().catch(() => {});
        setIsPlaying(true);
    };

    // 🎸 cards
    const bands = [
        { title: "⚡AC/DC⚡", image: acdc, link: "/acdc" },
        { title: "🦇Ozzy🦇", image: ozzy, link: "/ozzy" },
        { title: "👅Kiss👅", image: kiss, link: "/kiss" },
        { title: "🔥Iron Maiden🔥", image: ironmaiden, link: "/ironmaiden" },
        { title: "🦇Black Sabbath🦇", image: blacksabbath, link: "/blacksabbath" },
        { title: "👑Queen👑", image: queen, link: "/queen" }
    ];

    return (
        <div className={styles.page}>

            <section className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    <h1>ROCK<br />LEGENDS</h1>

                    <span className={styles.subtitle}>
                        LEYENDAS DEL ROCK
                    </span>

                    <p>
                        Explora las bandas más legendarias del rock y el metal en una sola experiencia.
                    </p>

                    {/* 🎧 REPRODUCTOR */}
                    <div className={styles.player}>
                        <audio ref={audioRef} onEnded={handleEnd} />

                        <div className={styles.controls}>
                            <button onClick={prev}>⏮</button>

                            {isPlaying ? (
                                <button onClick={pause}>⏸</button>
                            ) : (
                                <button onClick={play}>▶</button>
                            )}

                            <button onClick={next}>⏭</button>
                        </div>

                        <p className={styles.nowPlaying}>
                            🎧 {playlist[index]?.split("/").pop()}
                        </p>
                    </div>
                </div>

                {/* 🎸 CARDS */}
                <div className={styles.cardSection}>
                    {bands.map((b, i) => (
                        <Card key={i} title={b.title} image={b.image} link={b.link} />
                    ))}
                </div>

            </section>

        </div>
    );
};

export default Home;