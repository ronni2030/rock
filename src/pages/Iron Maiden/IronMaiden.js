import React, { useState, useEffect } from 'react';
import styles from './IronMaiden.module.css';
import { Link } from 'react-router-dom';

// Importación usando la carpeta con espacio (Asegúrate de que coincida con tu explorador de archivos)
import portada from '../../images/ironmaiden/portada.png'; 

const IronMaiden = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);
    const totalSlides = 3;

    useEffect(() => {
        setIsAnimated(true);
        const timer = setTimeout(() => setIsAnimated(false), 800);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Iron_Maiden_-_Ullevi_2011.jpg/1200px-Iron_Maiden_-_Ullevi_2011.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Iron_Maiden_-_Ozzfest_2005.jpg/1200px-Iron_Maiden_-_Ozzfest_2005.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Iron_Maiden_-_Donington_2007.jpg/1200px-Iron_Maiden_-_Donington_2007.jpg",
    ];

    return (
        <div className={styles.maidenPage}>

            {/* HEADER FIJO */}
            <header className={styles.header}>

                <nav className={styles.maidenNav}>
                    <div className={styles.navContainer}>
                        
                        {/* MENÚ COMPLETAMENTE INTEGRADO Y CENTRADO */}
                        <div className={styles.navLinks}>
                            <Link to="/" className={styles.navItem}>INICIO</Link>
                            
                            {/* Enlace de la sección actual (Activo con el brillo neón) */}
                            <Link to="/ironmaiden" className={`${styles.navItem} ${styles.maidenActive}`}>IRON MAIDEN</Link>
                            
                            <Link to="/ironmaiden/historia" className={styles.navItem}>HISTORIA</Link>
                            <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link>
                            <Link to="/ironmaiden/grupo" className={styles.navItem}>GRUPO</Link>
                        </div>

                        {/* Logotipo distintivo a la derecha del bloque */}
                        <div className={styles.navLogo}>
                            IRON MAIDEN
                        </div>
                    </div>
                </nav>
            </header>

            {/* HERO */}
            <section 
                className={styles.heroSection}
                style={{ backgroundImage: `url(${portada})` }}
            >
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h2>
                            LA DONCELLA DE HIERRO. <span>LEYENDA DEL HEAVY METAL.</span> – EXPLORÁ LA DISCOGRAFÍA, LA HISTORIA Y EL LEGADO DE LA BANDA QUE CONQUISTÓ EL MUNDO.
                        </h2> 

                        <a
                            href="https://www.ironmaiden.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.ampButton}
                        >
                            VISITA SU PÁGINA OFICIAL
                        </a>
                    </div>
                    <div className={styles.heroSpacer}></div>
                </div>
            </section>

        </div>
    );
};

export default IronMaiden;