import React from 'react';
import { Link } from 'react-router-dom';           // 👈 Importante
import styles from './Home.module.css';
import { useMusic } from '../context/MusicContext';

// 📸 imágenes locales (sin cambios)
import acdc from "../images/Home/acdc.jpg";
import ozzy from "../images/Home/ozzy.jpeg";
import kiss from "../images/Home/kiss.jpg";
import ironmaiden from "../images/Home/ironmaiden.jpg";
import blacksabbath from "../images/Home/blacksabbath.jpg";
import queen from "../images/Home/queen.jpg";

// ⚡ CORREGIDO: usa Link en lugar de <a> para evitar recargar la página
const Card = ({ title, image, link }) => (
    <Link to={link} className={styles.card}>
        <img src={image} alt={title} className={styles.card__img} />
        <span className={styles.card__footer}>{title}</span>
    </Link>
);

const Home = () => {
    // 🔥 Obtenemos el control global del reproductor
    const {
        currentTrack,
        isPlaying,
        play,
        togglePlay,
        next,
        prev,
        allTracks,
    } = useMusic();

    // 🎸 cards de bandas (sin cambios)
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

                    {/* 🎧 REPRODUCTOR (conectado al contexto global) */}
                    <div className={styles.player}>
                        {/* Ya NO hay <audio> aquí, lo maneja MusicContext */}

                        <div className={styles.controls}>
                            <button onClick={prev}>⏮</button>

                            {isPlaying ? (
                                <button onClick={togglePlay}>⏸</button>
                            ) : (
                                <button onClick={() => {
                                    if (currentTrack) {
                                        // Reanudar si hay una canción pausada
                                        togglePlay();
                                    } else {
                                        // Primera reproducción: empezar con la primera canción
                                        play(allTracks[0]);
                                    }
                                }}>▶</button>
                            )}

                            <button onClick={next}>⏭</button>
                        </div>

                        <p className={styles.nowPlaying}>
                            🎧 {currentTrack ? currentTrack.title : 'Sin reproducción'}
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