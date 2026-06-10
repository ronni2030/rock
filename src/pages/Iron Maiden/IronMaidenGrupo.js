import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaidenGrupo.module.css';

// Importación de la portada estática
import portadaImg from '../../images/ironmaiden/portada2.jpg';

// Importaciones locales de las fotos de los integrantes según tu árbol de archivos
import bruceImg from '../../images/ironmaiden/brucedickinson.jpg';
import steveImg from '../../images/ironmaiden/steveharris.jpg';
import daveImg from '../../images/ironmaiden/davemurray.jpg';
import adrianImg from '../../images/ironmaiden/adriansmith.jpg';
import janickImg from '../../images/ironmaiden/janickgers.jpg';
import nickoImg from '../../images/ironmaiden/nickomcBrain.jpeg'; // Extensión .jpeg según tu árbol

const IronMaidenGrupo = () => {
    const currentMembers = [
        { name: "Bruce Dickinson", role: "Vocalista", years: "1981–1993, 1999–presente", img: bruceImg },
        { name: "Steve Harris", role: "Bajo, Coros", years: "1975–presente", img: steveImg },
        { name: "Dave Murray", role: "Guitarra", years: "1976–presente", img: daveImg },
        { name: "Adrian Smith", role: "Guitarra, Coros", years: "1980–1990, 1999–presente", img: adrianImg },
        { name: "Janick Gers", role: "Guitarra", years: "1990–presente", img: janickImg },
        { name: "Nicko McBrain", role: "Batería", years: "1982–presente", img: nickoImg },
    ];

    const pastMembers = [
        { name: "Paul Di'Anno", role: "Vocalista (1978–1981)" },
        { name: "Blaze Bayley", role: "Vocalista (1994–1999)" },
        { name: "Dennis Stratton", role: "Guitarra (1979–1980)" },
        { name: "Tony Parsons", role: "Guitarra (1979)" },
        { name: "Clive Burr †", role: "Batería (1979–1982) — Fallecido en 2013" },
        { name: "Doug Sampson", role: "Batería (1977–1979)" },
        { name: "Terry Wapram", role: "Guitarra (1976–1977)" },
        { name: "Bob Sawyer", role: "Guitarra (1976)" },
    ];

    return (
        <div className={styles.maidenPage} style={{ backgroundImage: `url(${portadaImg})` }}>
            {/* Cabecera de la página */}
            <div className={styles.header}>
                
                <nav className={styles.maidenNav}>
                    <div className={styles.navContainer}>
                        {/* Espacio invisible simétrico a la izquierda para garantizar el centrado exacto */}
                        <div className={styles.navSpacer}></div>
                        
                        {/* Enlaces de navegación perfectamente centrados */}
                        <div className={styles.navLinks}>
                            <Link to="/" className={styles.navItem}>INICIO</Link>
                            <Link to="/ironmaiden" className={styles.navItem}>IRON MAIDEN</Link>
                            <Link to="/ironmaiden/historia" className={styles.navItem}>HISTORIA</Link>
                            <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link> 
                            <Link to="/ironmaiden/grupo" className={`${styles.navItem} ${styles.maidenActive}`}>GRUPO</Link>
                        </div>

                        {/* Logo de Iron Maiden a la extrema derecha */}
                        <div className={styles.navLogo}>IRON MAIDEN</div>
                    </div>
                </nav>
            </div>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS GUERREROS DE EDDIE</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BAND</span>
                        <span className={styles.titleMain}>⚔️ MIEMBROS ACTUALES ⚔️</span>
                    </h2>
                    <div className={styles.membersGrid}>
                        {currentMembers.map((m) => (
                            <div key={m.name} className={styles.memberCard}>
                                <div className={styles.cardHeaderDecoration}>
                                    <span className={styles.bolt}>⚙️</span>
                                    <span className={styles.bolt}>⚙️</span>
                                </div>
                                <div className={styles.imgWrapper}>
                                    <img src={m.img} alt={m.name} className={styles.memberImg} />
                                    <div className={styles.frameOverlay}></div>
                                </div>
                                <div className={styles.infoWrapper}>
                                    <h3 className={styles.memberName}>{m.name}</h3>
                                    <div className={styles.roleBadge}>{m.role}</div>
                                    <p className={styles.memberYears}>{m.years}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>PAST</span>
                        <span className={styles.titleMain}>🔥 MIEMBROS ANTERIORES 🔥</span>
                    </h2>
                    <div className={styles.pastMembersList}>
                        {pastMembers.map((m) => (
                            <div key={m.name} className={styles.pastMemberItem}>
                                <span className={styles.pastMemberName}>{m.name}</span>
                                <span className={styles.pastMemberRole}>{m.role}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 🔥 IRON MAIDEN 🔥</p>
                    <div className={styles.socialIcons}>
                        <span className={styles.icon}>🎸</span>
                        <span className={styles.icon}>⚔️</span>
                        <span className={styles.icon}>🤘</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default IronMaidenGrupo;