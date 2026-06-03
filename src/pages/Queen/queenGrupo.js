import React from 'react';
import { Link } from 'react-router-dom';
import styles from './queen.module.css';

const QueenGrupo = () => {
    const currentMembers = [
        { name: "Brian May", role: "Guitarra, Coros", years: "1970–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Brian_May_-_2012.jpg/440px-Brian_May_-_2012.jpg" },
        { name: "Roger Taylor", role: "Batería, Coros", years: "1970–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Roger_Taylor_2010.jpg/440px-Roger_Taylor_2010.jpg" },
        { name: "Adam Lambert", role: "Vocalista (giras)", years: "2011–presente", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Adam_Lambert_2019.jpg/440px-Adam_Lambert_2019.jpg" },
    ];

    const pastMembers = [
        { name: "Freddie Mercury †", role: "Vocalista, Piano (1970–1991)", note: "Fallecido en 1991" },
        { name: "John Deacon", role: "Bajo (1971–1997)" },
        { name: "Paul Rodgers", role: "Vocalista (2004–2009)" },
    ];

    return (
        <div className={styles.queenPage}>
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={styles.navItem}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={styles.navItem}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={`${styles.navItem} ${styles.queenActive}`}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>GRUPO</h1>
                <p className={styles.tagline}>LOS REYES DE LA MÚSICA</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>BAND</span>
                        <span className={styles.titleMain}>👑 MIEMBROS ACTUALES 👑</span>
                    </h2>
                    <div className={styles.membersGrid}>
                        {currentMembers.map((m) => (
                            <div key={m.name} className={styles.memberCard}>
                                <img src={m.img} alt={m.name} className={styles.memberImg} />
                                <h3 className={styles.memberName}>{m.name}</h3>
                                <p className={styles.memberRole}>{m.role}</p>
                                <p className={styles.memberYears}>{m.years}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>PAST</span>
                        <span className={styles.titleMain}>🎸 MIEMBROS ANTERIORES 🎸</span>
                    </h2>
                    <div className={styles.pastMembersList}>
                        {pastMembers.map((m) => (
                            <div key={m.name} className={styles.pastMemberItem}>
                                <span className={styles.pastMemberName}>{m.name}</span>
                                <span className={styles.pastMemberRole}>{m.role}</span>
                                {m.note && <span className={styles.pastMemberNote}>{m.note}</span>}
                            </div>
                        ))}
                    </div>
                </section>
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

export default QueenGrupo;