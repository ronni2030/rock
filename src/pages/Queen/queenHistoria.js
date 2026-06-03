import React from 'react';
import { Link } from 'react-router-dom';
import styles from './queen.module.css';

const QueenHistoria = () => {
    return (
        <div className={styles.queenPage}>
            <nav className={styles.queenNav}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navItem}>INICIO</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen" className={styles.navItem}>QUEEN</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/historia" className={`${styles.navItem} ${styles.queenActive}`}>HISTORIA</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/albunes" className={styles.navItem}>ÁLBUMES</Link>
                    <span className={styles.navDivider}>|</span>
                    <Link to="/queen/grupo" className={styles.navItem}>GRUPO</Link>
                </div>
            </nav>

            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>LA ÉPICA HISTORIA DEL REINO DE QUEEN</p>
            </div>

            <div className={styles.content}>
                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>ORIGEN</span>
                        <span className={styles.titleMain}>👑 Los Orígenes (1970–1973)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Queen se formó en Londres en 1970 cuando <strong>Brian May</strong> y <strong>Roger Taylor</strong>, que ya tocaban juntos en Smile, se unieron al carismático <strong>Freddie Mercury</strong>. Más tarde, <strong>John Deacon</strong> se incorporó como bajista en 1971, completando la formación clásica.
                    </p>
                    <p className={styles.rockText}>
                        En 1973 lanzaron su álbum debut homónimo <em>"Queen"</em>, mostrando desde el inicio una mezcla única de hard rock, glam rock y melodías elaboradas que los diferenciaría de cualquier otra banda de la época.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>GOLDEN</span>
                        <span className={styles.titleMain}>⚡ La Era Dorada (1974–1980)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Con <em>"Sheer Heart Attack"</em> (1974) y <em>"A Night at the Opera"</em> (1975), Queen alcanzó la cima mundial. Este último álbum contenía <em>"Bohemian Rhapsody"</em>, una obra maestra de casi 6 minutos que revolucionó la música pop-rock para siempre.
                    </p>
                    <p className={styles.rockText}>
                        <em>"News of the World"</em> (1977) les dio dos de sus himnos más reconocibles: <em>"We Will Rock You"</em> y <em>"We Are the Champions"</em>, canciones que trascienden el rock y forman parte del imaginario colectivo mundial.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>LIVE AID</span>
                        <span className={styles.titleMain}>🎸 Live Aid y la Cúspide (1980–1991)</span>
                    </h2>
                    <p className={styles.rockText}>
                        El <strong>13 de julio de 1985</strong>, Queen protagonizó la actuación más memorable de la historia del rock en el concierto benéfico <strong>Live Aid</strong> en el estadio de Wembley. Freddie Mercury dominó a las 72,000 personas presentes y a millones de espectadores en todo el mundo.
                    </p>
                    <p className={styles.rockText}>
                        En 1991, Freddie Mercury reveló públicamente que padecía <strong>SIDA</strong>. Al día siguiente, el 24 de noviembre de 1991, falleció. El mundo del rock perdió a uno de sus mayores genios.
                    </p>
                </section>

                <section className={styles.rockSection}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleOutline}>LEGACY</span>
                        <span className={styles.titleMain}>🤘 El Legado (1991–Presente)</span>
                    </h2>
                    <p className={styles.rockText}>
                        Tras la muerte de Freddie, Brian May y Roger Taylor continuaron el legado de Queen junto al vocalista <strong>Paul Rodgers</strong> (2004–2009) y posteriormente con <strong>Adam Lambert</strong> (2011–presente), recorriendo el mundo con shows espectaculares.
                    </p>
                    <p className={styles.rockText}>
                        En 2018, la película biográfica <em>"Bohemian Rhapsody"</em> revivió el interés global por Queen, ganando 4 Premios Óscar. Con más de <strong>300 millones de discos vendidos</strong>, Queen sigue siendo una de las bandas más exitosas de todos los tiempos.
                    </p>
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

export default QueenHistoria;