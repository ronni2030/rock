import React from 'react';
import styles from './BlackSabbath.module.css';
import { Link } from 'react-router-dom';

import portada from '../../images/blacksabbath/portada.png';

const BlackSabbath = () => {
    return (
        <div
            className={styles.sabbathPage}
            style={{
                '--bg-image': `url(${portada})`
            }}
        >
            {/* Overlay Oscuro */}
            <div className={styles.backgroundOverlay}></div>

            {/* Niebla */}
            <div className={styles.fog}></div>

            {/* Luces */}
            <div className={`${styles.spotlight} ${styles.spotlight1}`}></div>
            <div className={`${styles.spotlight} ${styles.spotlight2}`}></div>
            <div className={`${styles.spotlight} ${styles.spotlight3}`}></div>

            {/* Partículas */}
            <div className={styles.particles}>
                {[...Array(40)].map((_, i) => (
                    <span
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 8}s`
                        }}
                    />
                ))}
            </div>

            {/* MENU */}
            <nav className={styles.sabbathNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>
                        INICIO
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/blacksabbath"
                        className={`${styles.navItem} ${styles.sabbathActive}`}
                    >
                        BLACK SABBATH
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/blacksabbath/historia"
                        className={styles.navItem}
                    >
                        HISTORIA
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/blacksabbath/albunes"
                        className={styles.navItem}
                    >
                        ÁLBUMES
                    </Link>

                    <span className={styles.navDivider}>|</span>

                    <Link
                        to="/blacksabbath/grupo"
                        className={styles.navItem}
                    >
                        GRUPO
                    </Link>
                </div>
            </nav>

            {/* HERO */}
            <section className={styles.concertHero}>

                <div className={styles.heroContent}>

                    <h1 className={styles.concertTitle}>
                        BLACK
                        <span>SABBATH</span>
                    </h1>

                    <p className={styles.concertSubtitle}>
                        THE GODFATHERS OF HEAVY METAL
                    </p>

                </div>

                <div className={styles.stage}></div>

            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} R.A.V.V 🦇 BLACK SABBATH 🦇
                    </p>

                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>🦇</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlackSabbath;