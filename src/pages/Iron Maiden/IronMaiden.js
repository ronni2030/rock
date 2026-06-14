import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaiden.module.css';

// Asegúrate de que la ruta sea correcta en tu sistema de archivos
import portada from '../../images/ironmaiden/portada.png';

const IronMaiden = () => {
    return (
        <div className={styles.maidenPage}>
            {/* HEADER FIJO */}
            <header className={styles.header}>
                <nav className={styles.maidenNav}>
                    <div className={styles.navContainer}>
                        <div className={styles.navLinks}>
                            <Link to="/" className={styles.navItem}>INICIO</Link>
                            <Link to="/ironmaiden" className={`${styles.navItem} ${styles.maidenActive}`}>IRON MAIDEN</Link>
                            <Link to="/ironmaiden/historia" className={styles.navItem}>HISTORIA</Link>
                            <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link>
                            <Link to="/ironmaiden/grupo" className={styles.navItem}>GRUPO</Link>
                        </div>
                        <div className={styles.navLogo}>
                            IRON MAIDEN
                        </div>
                    </div>
                </nav>
            </header>

            {/* HERO SECTION */}
            <section 
                className={styles.heroSection}
                style={{ backgroundImage: `url(${portada})` }}
            >
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        <h2>
                            LA DONCELLA DE HIERRO. <span>LEYENDA DEL HEAVY METAL.</span> 
                            – EXPLORÁ LA DISCOGRAFÍA, LA HISTORIA Y EL LEGADO DE LA BANDA QUE CONQUISTÓ EL MUNDO.
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