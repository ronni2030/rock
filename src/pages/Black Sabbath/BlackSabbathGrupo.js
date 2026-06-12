import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlackSabbathGrupo.module.css';

// 1. IMPORTACIÓN DEL FONDO
import portada2 from '../../images/blacksabbath/portada2.jpg';

// 2. IMPORTACIONES DE LOS INTEGRANTES DESDE TU ÁRBOL DE DIRECTORIOS
import tonyiommi from '../../images/blacksabbath/tonyiommi.jpg';
import ozzyosbourne from '../../images/blacksabbath/ozzyosbourne.jpg';
import geezerbutler from '../../images/blacksabbath/geezergutler.jpg'; // Corregido con 'g'
import billward from '../../images/blacksabbath/billward.jpg';

import ronniejamesdio from '../../images/blacksabbath/ronniejamesdio.jpg';
import vinnyappice from '../../images/blacksabbath/vinnyappice.jpg';

import iangillan from '../../images/blacksabbath/iangillan.jpeg'; // Extensión .jpeg
import glennhughes from '../../images/blacksabbath/glennhughes.jpg';
import raygillen from '../../images/blacksabbath/raygillen.png'; // Extensión .png
import ericsinger from '../../images/blacksabbath/ericsinger.jpg';

import tonymartin from '../../images/blacksabbath/tonymartin.jpg';
import cozypowell from '../../images/blacksabbath/cozypowell.jpg';
import tommyclufetos from '../../images/blacksabbath/tommyclufetos.jpg';

const BlackSabbathGrupo = () => {
    // Estructura de Eras vinculando las imágenes locales ya importadas
    const erasBS = [
        {
            id: "classic",
            title: "🦇 ERA CLÁSICA (OZZY OSBOURNE) 🦇",
            subtitle: "1968–1979 / Reuniones",
            members: [
                { name: "Tony Iommi", role: "Guitarra", years: "1968–2017", img: tonyiommi },
                { name: "Ozzy Osbourne", role: "Vocalista", years: "1968–1979, 1997–2017", img: ozzyosbourne },
                { name: "Geezer Butler", role: "Bajo", years: "1968–1985, 1990–1994, 1997–2017", img: geezerbutler },
                { name: "Bill Ward", role: "Batería", years: "1968–1980, 1983, 1994, 1997–2012", img: billward },
            ]
        },
        {
            id: "dio",
            title: "⚡ ERA RONNIE JAMES DIO ⚡",
            subtitle: "1979–1982 / 1991–1992",
            members: [
                { name: "Ronnie James Dio †", role: "Vocalista", years: "1979–1982, 1991–1992", img: ronniejamesdio, note: "Fallecido en 2010" },
                { name: "Vinny Appice", role: "Batería", years: "1980–1982, 1991–1992, 1998", img: vinnyappice },
            ]
        },
        {
            id: "eighties",
            title: "🔥 ERA DE LAS REVOLUCIONES (MID 80s) 🔥",
            subtitle: "1983–1987",
            members: [
                { name: "Ian Gillan", role: "Vocalista", years: "1983–1984", img: iangillan },
                { name: "Glenn Hughes", role: "Vocalista", years: "1985–1986", img: glennhughes },
                { name: "Ray Gillen †", role: "Vocalista", years: "1986–1987", img: raygillen, note: "Fallecido en 1993" },
                { name: "Eric Singer", role: "Batería", years: "1985–1987", img: ericsinger },
            ]
        },
        {
            id: "martin",
            title: "⚔️ ERA TONY MARTIN & ETAPA FINAL ⚔️",
            subtitle: "1987–1997 / 2012–2017",
            members: [
                { name: "Tony Martin", role: "Vocalista", years: "1987–1991, 1993–1997", img: tonymartin },
                { name: "Cozy Powell †", role: "Batería", years: "1988–1991, 1994–1995", img: cozypowell, note: "Fallecido en 1998" },
                { name: "Tommy Clufetos", role: "Batería (Tour)", years: "2012–2017", img: tommyclufetos },
            ]
        }
    ];

    return (
        /* Le inyectamos la portada2 importada directamente a la propiedad personalizada CSS */
        <div className={styles.sabbathPage} style={{ '--bg-local-portada': `url(${portada2})` }}>
            {/* EFECTOS AMBIENTALES DE CONCIERTO */}
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.fog}></div>
            
            <div className={styles.spotlightContainer}>
                <div className={`${styles.spotlight} ${styles.spotlight1}`}></div>
                <div className={`${styles.spotlight} ${styles.spotlight2}`}></div>
                <div className={`${styles.spotlight} ${styles.spotlight3}`}></div>
            </div>

            {/* PARTÍCULAS SUTILES FLOATING */}
            <div className={styles.particles}>
                <div className={styles.particle} style={{ left: '8%', animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className={styles.particle} style={{ left: '28%', animationDelay: '1.2s', animationDuration: '8.5s' }}></div>
                <div className={styles.particle} style={{ left: '50%', animationDelay: '0.3s', animationDuration: '7s' }}></div>
                <div className={styles.particle} style={{ left: '72%', animationDelay: '2.5s', animationDuration: '9.5s' }}></div>
                <div className={styles.particle} style={{ left: '90%', animationDelay: '0.8s', animationDuration: '5.5s' }}></div>
            </div>

            {/* BARRA DE NAVEGACIÓN */}
            <nav className={styles.sabbathNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath" className={styles.navItem}>BLACK SABBATH</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/blacksabbath/grupo" className={`${styles.navItem} ${styles.sabbathActive}`}>GRUPO</Link>
                </div>
            </nav>

            {/* TÍTULO PRINCIPAL */}
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>LINE-UP</h1>
                <p className={styles.tagline}>CRONOLOGÍA DE LOS DIOSES DEL METAL</p>
            </div>

            {/* SECCIONES MAPEADAS POR ERA */}
            <div className={styles.content}>
                {erasBS.map((era) => (
                    <section key={era.id} className={styles.rockSection}>
                        <div className={styles.sectionTitle}>
                            <span className={styles.titleOutline}>{era.subtitle}</span>
                            <h2 className={styles.titleMain}>{era.title}</h2>
                        </div>
                        
                        <div className={styles.membersGrid}>
                            {era.members.map((m) => (
                                <div key={m.name} className={styles.memberCard}>
                                    <div className={styles.imgWrapper}>
                                        <img src={m.img} alt={m.name} className={styles.memberImg} />
                                        {m.note && <span className={styles.cardNoteBadge}>{m.note}</span>}
                                    </div>
                                    <h3 className={styles.memberName}>{m.name}</h3>
                                    <p className={styles.memberRole}>{m.role}</p>
                                    <p className={styles.memberYears}>{m.years}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} R.A.V.V 🦇 BLACK SABBATH 🦇</p>
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

export default BlackSabbathGrupo;