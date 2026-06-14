import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './KissHistoria.module.css';

const KissHistoria = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll(`.${styles.rockSection}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.2 }
        );

        sections.forEach(sec => observer.observe(sec));

        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            sections.forEach(sec => observer.unobserve(sec));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.kissPage}>
            {/* PROGRESS BAR */}
            <div
                className={styles.progressBar}
                style={{ width: `${scrollProgress}%` }}
            />

            {/* NAV */}
            <nav className={styles.kissNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <Link to="/kiss" className={styles.navItem}>KISS</Link>
                    <Link to="/kiss/historia" className={`${styles.navItem} ${styles.active}`}>HISTORIA</Link>
                    <Link to="/kiss/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <Link to="/kiss/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            {/* HERO */}
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>EL ASCENSO DEL EJÉRCITO DE KISS</p>
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>KISS</span>
                        <span className={styles.titleMain}>💋 Formación (1972–1974)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1972, <strong>Paul Stanley</strong> y <strong>Gene Simmons</strong> se conocieron en Nueva York y formaron Wicked Lester.
                        Luego reclutaron a <strong>Ace Frehley</strong> y <strong>Peter Criss</strong> para crear KISS en 1973.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>FAME</span>
                        <span className={styles.titleMain}>🔥 Explosión (1975–1979)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Con <em>"Alive!"</em>, KISS explotó mundialmente. Fuego, sangre y shows extremos los convirtieron en leyenda.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>CHANGE</span>
                        <span className={styles.titleMain}>⚡ Sin maquillaje (1980–1996)</span>
                    </h2>
                    <p className={styles.rockText}>
                        En 1983 se quitaron el maquillaje. En 1996 regresaron con la formación original en una gira histórica.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>END</span>
                        <span className={styles.titleMain}>🤘 Final (1997–2023)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Su gira final terminó en 2023 en Nueva York tras más de 50 años de historia.
                    </p>
                </section>
            </div>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} R.A.V.V 💋 KISS 💋
                    </p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>💋</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default KissHistoria;