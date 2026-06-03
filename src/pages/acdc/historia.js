import React from 'react';
import { Link } from 'react-router-dom';
import styles from './albunes.module.css';

const AcdcHistoria = () => {
    return (
        <div className={styles.rockContainer}>
            <nav className={styles.rockNav}>
                <Link to="/" className={styles.rockNavItem}>INICIO</Link> |
                <Link to="/acdc" className={styles.rockNavItem}>ACDC</Link> |
                <Link to="/acdc/historia" className={`${styles.rockNavItem} ${styles.rockActive}`}>HISTORIA</Link> |
                <Link to="/acdc/albunes" className={styles.rockNavItem}>ÁLBUMES</Link> |
                <Link to="/acdc/grupo" className={styles.rockNavItem}>GRUPO</Link>
            </nav>

            <header className={styles.rockHeader}>
                <h1 className={styles.rockTitle}>👑 HISTORIA 👑</h1>
                <div className={styles.guitarRiff}></div>
            </header>

            <section className={styles.rockContent}>
                <h2 className={styles.rockSubtitle}>👑 CONOCE SU HISTORIA PASO A PASO 👑</h2>

                <div style={{textAlign:'center', marginBottom:'30px'}}>
                    <img width="200" height="200" src="https://cdn.pixabay.com/photo/2021/11/14/15/32/ac-dc-6794857_1280.png" alt="Logo de AC/DC" style={{borderRadius:'10px'}} />
                </div>

                <div className={styles.rockAlbumsGrid} style={{gridTemplateColumns:'1fr'}}>
                    <div className={styles.rockAlbumCard} style={{cursor:'default'}}>
                        <h3 className={styles.rockAlbumTitle}>🎸 Primeros años</h3>
                        <p className={styles.rockAlbumInfo} style={{textAlign:'justify', padding:'20px'}}>
                            En noviembre de 1973, Malcolm Young y Angus Young formaron AC/DC, reclutando al bajista Larry Van Kriedt, al cantante Dave Evans y al baterista Colin Burgess. En los festivales de Año Nuevo de 1973, tocaron su primer concierto en el club «Chequers» en Sídney. En 1974 grabaron su primer sencillo «Can I Sit Next to You Girl». Angus Young adoptó su característico uniforme escolar, idea de su hermana Margaret.
                        </p>
                    </div>

                    <div className={styles.rockAlbumCard} style={{cursor:'default'}}>
                        <h3 className={styles.rockAlbumTitle}>🎸 Éxito internacional (1976–1978)</h3>
                        <p className={styles.rockAlbumInfo} style={{textAlign:'justify', padding:'20px'}}>
                            En 1975, firmaron con Atlantic Records y realizaron giras en Europa junto a grandes del hard rock como Kiss, Aerosmith y Blue Öyster Cult. Publicaron álbumes como High Voltage, Dirty Deeds Done Dirt Cheap y Let There Be Rock, ganando reconocimiento mundial.
                        </p>
                    </div>

                    <div className={styles.rockAlbumCard} style={{cursor:'default'}}>
                        <h3 className={styles.rockAlbumTitle}>🎸 Muerte de Bon Scott (1980)</h3>
                        <p className={styles.rockAlbumInfo} style={{textAlign:'justify', padding:'20px'}}>
                            El 19 de febrero de 1980, Bon Scott falleció en Londres por intoxicación etílica. Su pérdida marcó profundamente a la banda, pero también impulsó su siguiente gran etapa.
                        </p>
                    </div>

                    <div className={styles.rockAlbumCard} style={{cursor:'default'}}>
                        <h3 className={styles.rockAlbumTitle}>🎸 Llegada de Brian Johnson (1980–1983)</h3>
                        <p className={styles.rockAlbumInfo} style={{textAlign:'justify', padding:'20px'}}>
                            Con Brian Johnson, grabaron Back in Black (1980), dedicado a Bon Scott. El disco se convirtió en uno de los más vendidos de la historia. Luego lanzaron For Those About to Rock (We Salute You), consolidándose como leyendas del rock.
                        </p>
                    </div>

                    <div className={styles.rockAlbumCard} style={{cursor:'default'}}>
                        <h3 className={styles.rockAlbumTitle}>🎸 Actualidad / Power Up (2018–2023)</h3>
                        <p className={styles.rockAlbumInfo} style={{textAlign:'justify', padding:'20px'}}>
                            En 2020, AC/DC regresó con Power Up, grabado por la formación clásica. El álbum fue un tributo a Malcolm Young. En 2023, anunciaron su participación en el festival Power Trip junto a leyendas como Metallica y Guns N' Roses.
                        </p>
                    </div>
                </div>
            </section>

            <footer className={styles.rockFooter}>
                <p className={styles.rockFooterText}>© {new Date().getFullYear()} R.A.V.V ⚡ AC/DC ⚡</p>
            </footer>
        </div>
    );
};

export default AcdcHistoria;