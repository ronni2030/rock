import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Kiss.module.css';

const Kiss = () => {
    return (
        <div className={styles.kissPage}>
            {/* Generador de estrellas de fondo */}
            <div className={styles.stars}>
                {[...Array(150)].map((_, i) => (
                    <span
                        key={i}
                        className={styles.star}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Navegación */}
            <nav className={styles.kissNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <Link to="/kiss" className={`${styles.navItem} ${styles.kissActive}`}>KISS</Link>
                    <Link to="/kiss/historia" className={styles.navItem}>HISTORIA</Link>
                    <Link to="/kiss/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <Link to="/kiss/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            {/* Contenido principal */}
            <main className={styles.mainContent}>
                <h1 className={styles.logo}>KISS</h1>

                <section className={styles.worldSection}>
                    <div className={styles.worldContainer}>
                        <div className={styles.world}>
                            <div className={styles.ring}></div>
                            <div className={styles.ring}></div>
                            <div className={styles.ring}></div>
                            <div className={styles.centerCore}>KISS</div>
                        </div>
                    </div>
                </section>

                <h2 className={styles.bigTitle}>EL EJÉRCITO MÁS GRANDE DEL ROCK</h2>

                <a
                    href="https://www.kissonline.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.heroButton}
                >
                    💋 JOIN THE KISS ARMY 💋
                </a>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>
                    © {new Date().getFullYear()} R.A.V.V • KISS
                </p>
            </footer>
        </div>
    );
};

export default Kiss;