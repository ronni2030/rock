import React from 'react';
import { Link } from 'react-router-dom';
import styles from './albunes.module.css';

const AcdcGrupo = () => {
    const currentMembers = [
        { name: "Brian Johnson", role: "Vocalista", years: "1980–2016, 2020–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brian_Johnson_2015.jpg/440px-Brian_Johnson_2015.jpg" },
        { name: "Angus Young", role: "Guitarra solista", years: "1973–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Angus_Young_-_AC-DC_-_2008.jpg/440px-Angus_Young_-_AC-DC_-_2008.jpg" },
        { name: "Stevie Young", role: "Guitarra rítmica", years: "1988, 2014–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Stevie_Young_2015.jpg/440px-Stevie_Young_2015.jpg" },
        { name: "Cliff Williams", role: "Bajo", years: "1977–2016, 2020–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Cliff_Williams_2015.jpg/440px-Cliff_Williams_2015.jpg" },
        { name: "Phil Rudd", role: "Batería", years: "1975–1983, 1995–2015, 2020–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Phil_Rudd_2010.jpg/440px-Phil_Rudd_2010.jpg" },
    ];

    const pastMembers = [
        { name: "Bon Scott †", role: "Vocalista (1974–1980) — Fallecido en 1980" },
        { name: "Dave Evans", role: "Vocalista (1973–1974)" },
        { name: "Malcolm Young †", role: "Guitarra rítmica (1973–2014) — Fallecido en 2017" },
        { name: "Mark Evans", role: "Bajo (1975–1977)" },
        { name: "Simon Wright", role: "Batería (1983–1989)" },
        { name: "Chris Slade", role: "Batería (1990–1995, 2015–2020)" },
        { name: "George Young †", role: "Bajo (1973–1975) — Fallecido en 2017" },
    ];

    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/acdc" className={styles.rockNavItem}>ACDC</Link> |
                <Link to="/acdc/historia" className={styles.rockNavItem}>HISTORIA</Link> |
                <Link to="/acdc/albunes" className={styles.rockNavItem}>ÁLBUMES</Link> |
                <Link to="/acdc/grupo" className={`${styles.rockNavItem} ${styles.rockActive}`}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>👾 MIEMBROS 👾</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>🎸 MIEMBROS ACTUALES 🎸</h2>
                <div className={styles.rockAlbumsGrid}>
                    {currentMembers.map((m) => (
                        <div key={m.name} className={styles.rockAlbumCard} style={{cursor:'default'}}>
                            <h3 className={styles.rockAlbumTitle}>{m.name}</h3>
                            <img src={m.img} alt={m.name} className={styles.rockAlbumCover} style={{height:'220px', objectFit:'cover', objectPosition:'top'}} />
                            <p className={styles.rockAlbumInfo} style={{paddingTop:'10px'}}>{m.role}<br/>{m.years}</p>
                        </div>
                    ))}
                </div>

                <h2 className={styles.rockSubtitle} style={{marginTop:'40px'}}>🎸 MIEMBROS ANTERIORES 🎸</h2>
                <div className={styles.rockAlbumsGrid} style={{gridTemplateColumns:'1fr'}}>
                    {pastMembers.map((m) => (
                        <div key={m.name} className={styles.rockAlbumCard} style={{cursor:'default'}}>
                            <h3 className={styles.rockAlbumTitle}>{m.name}</h3>
                            <p className={styles.rockAlbumInfo}>{m.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V ⚡ AC/DC ⚡</p>
            </footer>
        </div>
    );
};

export default AcdcGrupo;