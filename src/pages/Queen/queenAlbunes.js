import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './queenAlbunes.module.css';

const QueenAlbunes = () => {
    const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/fJ9rUzIMcZQ");
    const videoRef = useRef(null);

    const albumVideos = {
        "Queen": "https://www.youtube.com/embed/fJ9rUzIMcZQ",
        "Queen II": "https://www.youtube.com/embed/r8OipmKFDeM",
        "Sheer Heart Attack": "https://www.youtube.com/embed/LnKUD_OztW0",
        "A Night at the Opera": "https://www.youtube.com/embed/fJ9rUzIMcZQ",
        "A Day at the Races": "https://www.youtube.com/embed/HB7pOzCcbsE",
        "News of the World": "https://www.youtube.com/embed/DrFjb3p2vFE",
        "Jazz": "https://www.youtube.com/embed/0wZSbPDqmgQ",
        "The Game": "https://www.youtube.com/embed/45DBs9cXwVw",
        "Flash Gordon": "https://www.youtube.com/embed/HcwTxGSBXvY",
        "Hot Space": "https://www.youtube.com/embed/tBFBQd2t84U",
        "The Works": "https://www.youtube.com/embed/lJ-BI29Lw5M",
        "A Kind of Magic": "https://www.youtube.com/embed/0p_1QSdGPP0",
        "The Miracle": "https://www.youtube.com/embed/vPXbzHEWAkE",
        "Innuendo": "https://www.youtube.com/embed/2ZBtPf7FOoM",
        "Made in Heaven": "https://www.youtube.com/embed/0DO-aUXPNes",
    };

    const albums = [
        { name: "Queen", year: "1973", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_-_Queen.png" },
        { name: "Queen II", year: "1974", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/1/1c/Queen_-_Queen_II.png" },
        { name: "Sheer Heart Attack", year: "1974", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/9/97/Queen_-_Sheer_Heart_Attack.png" },
        { name: "A Night at the Opera", year: "1975", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png" },
        { name: "A Day at the Races", year: "1976", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Queen_-_A_Day_at_the_Races.png" },
        { name: "News of the World", year: "1977", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/1/10/Queen_News_of_the_World.png" },
        { name: "Jazz", year: "1978", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/3/35/Queen_Jazz.png" },
        { name: "The Game", year: "1980", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Queen_The_Game.png" },
        { name: "Flash Gordon", year: "1980", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/2/24/Queen_Flash_Gordon.png" },
        { name: "Hot Space", year: "1982", label: "EMI / Elektra", cover: "https://upload.wikimedia.org/wikipedia/en/1/19/Queen_Hot_Space.png" },
        { name: "The Works", year: "1984", label: "EMI / Capitol", cover: "https://upload.wikimedia.org/wikipedia/en/d/d9/Queen_-_The_Works.png" },
        { name: "A Kind of Magic", year: "1986", label: "EMI / Capitol", cover: "https://upload.wikimedia.org/wikipedia/en/c/ca/Queen_A_Kind_of_Magic.png" },
        { name: "The Miracle", year: "1989", label: "Parlophone / Capitol", cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Queen_-_The_Miracle.png" },
        { name: "Innuendo", year: "1991", label: "Parlophone / Hollywood", cover: "https://upload.wikimedia.org/wikipedia/en/4/42/Queen_Innuendo.png" },
        { name: "Made in Heaven", year: "1995", label: "Parlophone / Hollywood", cover: "https://upload.wikimedia.org/wikipedia/en/8/8a/Queen_Made_in_Heaven.png" },
    ];

    const handleAlbumClick = (name) => {
        setCurrentVideo(albumVideos[name] || "https://www.youtube.com/embed/fJ9rUzIMcZQ");
        videoRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/queen" className={styles.rockNavItem}>QUEEN</Link> |
                <Link to="/queen/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/queen/albunes" className={`${styles.rockNavItem} ${styles.rockActive}`}>ÁLBUMES</Link> |
                <Link to="/queen/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>💽 ÁLBUMES 💽</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>📀 DISCOGRAFÍA COMPLETA 📀</h2>
                <div className={styles.rockVideoContainer} ref={videoRef}>
                    <iframe width="560" height="315" src={currentVideo} title="Queen Discografía"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.rockVideo}></iframe>
                </div>
                <div className={styles.rockAlbumsGrid}>
                    {albums.map((album) => (
                        <div key={album.name} className={styles.rockAlbumCard} onClick={() => handleAlbumClick(album.name)}>
                            <h3 className={styles.rockAlbumTitle}>{album.name}</h3>
                            <p className={styles.rockAlbumInfo}>{album.year}<br />{album.label}</p>
                            <img src={album.cover} alt={album.name} className={styles.rockAlbumCover} />
                            <div className={styles.rockAlbumOverlay}>👑</div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V 👑 QUEEN 👑</p>
            </footer>
        </div>
    );
};

export default QueenAlbunes;