import React, { useState, useEffect } from 'react';
import styles from './queen.module.css';
import { Link } from 'react-router-dom';

const Queen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);
    const totalSlides = 3;

    useEffect(() => {
        setIsAnimated(true);
        const timer = setTimeout(() => setIsAnimated(false), 1000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    const nextSlide = () => setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Queen_-_Bohemian_Rhapsody_filming_-_1975.png/1200px-Queen_-_Bohemian_Rhapsody_filming_-_1975.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Queen_at_the_Manor_Studio%2C_1975.jpg/1200px-Queen_at_the_Manor_Studio%2C_1975.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Queen_Crowd_at_Wembley.jpg/1200px-Queen_Crowd_at_Wembley.jpg",
    ];

    return (
        <div className={styles.queenPage}>
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={`${styles.navItem} ${styles.queenActive}`}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>QUEEN</h1>
                <span className={styles.logoSub}>WE ARE THE CHAMPIONS</span>
                <p className={styles.tagline}>THE GREATEST ROCK BAND OF ALL TIME</p>
            </div>

            <div className={styles.sliderContainer}>
                <div className={`${styles.sliderWrapper} ${isAnimated ? styles.slideAnimation : ''}`}>
                    <img className={styles.sliderItem} src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                </div>
                <button className={styles.prevButton} onClick={prevSlide}><span>❮</span></button>
                <button className={styles.nextButton} onClick={nextSlide}><span>❯</span></button>
                <div className={styles.slideIndicator}>
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <span key={i} className={`${styles.indicatorDot} ${i === currentIndex ? styles.activeDot : ''}`} onClick={() => setCurrentIndex(i)} />
                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>QUEEN</span>
                        <span className={styles.titleMain}>👑 LOS REYES DEL ROCK 👑</span>
                    </h2>
                    <p className={styles.rockText}>
                        Formados en <strong>Londres en 1970</strong>, <strong>Queen</strong> es una de las bandas más icónicas e influyentes de la historia de la música. <strong>Freddie Mercury, Brian May, Roger Taylor y John Deacon</strong> crearon un sonido único que fusionó rock, ópera, pop y glam rock de forma magistral.
                    </p>
                    <p className={styles.rockText}>
                        Con himnos eternos como <em>"Bohemian Rhapsody"</em>, <em>"We Will Rock You"</em>, <em>"We Are the Champions"</em> y <em>"Don't Stop Me Now"</em>, Queen conquistó el mundo entero. Su actuación en <strong>Live Aid 1985</strong> es considerada la mejor actuación en vivo de la historia del rock.
                    </p>
                </section>
                <div className={styles.officialLink}>
                    <p className={styles.linkText}>VISITA SU PÁGINA OFICIAL</p>
                    <a href="https://www.queenonline.com/" target="_blank" rel="noreferrer" className={styles.ampButton}>
                        👑 ENTRA AL REINO DE QUEEN 👑
                    </a>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 👑 QUEEN 👑</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>👑</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Queen;