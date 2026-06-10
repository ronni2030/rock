import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IronMaidenHistoria.module.css';

// Importación de la imagen de fondo de la página
import portada from '../../images/ironmaiden/portada2.jpg';

// Importaciones estáticas de las imágenes de Eddies (Rutas exactas basados en tu raíz)
import earlyEddie from '../../images/ironmaiden/EARLY EDDIE.jpg';
import powerslaveEddie from '../../images/ironmaiden/POWERSLAVE EDDIE.jpg';
import xfactorEddie from '../../images/ironmaiden/X-FACTOR EDDIE.jpg';
import bookOfSoulsEddie from '../../images/ironmaiden/BOOK OF SOULS EDDIE.jpg';

// Importaciones estáticas de las portadas de álbumes/giras (Rutas exactas basados en tu raíz)
import theFirstTours from '../../images/ironmaiden/THE FIRST TOURS.jpg';
import theNumberOfTheBeast from '../../images/ironmaiden/THE NUMBER OF THE BEAST.jpg';
import theVirtualEra from '../../images/ironmaiden/THE VIRTUAL ERA.jpg';
import theSeventhSonTour from '../../images/ironmaiden/THE SEVENTH SON TOUR.jpg';

const IronMaidenHistoria = () => {
    // Array de datos vinculando directamente las imágenes importadas arriba
    const erasData = [
        {
            id: 1,
            subtitulo: "ERA 1:",
            titulo: "LOS ORÍGENES Y EL DEBUT",
            años: "(1975–1981)",
            eddieName: "EARLY EDDIE",
            eddieImg: earlyEddie, 
            albumImg: theFirstTours,
            albumTitle: "THE FIRST TOURS",
            resumenAlbum: "El amanecer del NWOBHM. El sonido crudo de los clubs de Londres capturado en un vinilo que cambió la historia del Metal para siempre.",
            textoHistoria: "Steve Harris fundó Iron Maiden en 1975 en el East End de Londres. Inspirado por bandas como Deep Purple y Black Sabbath, Harris quería crear algo más agresivo y épico. Tras años de formaciones cambiantes, la banda comenzó a consolidarse. En 1979 lanzaron su primer sencillo 'Running Free' y en 1980 su álbum debut homónimo."
        },
        {
            id: 2,
            subtitulo: "ERA 2:",
            titulo: "LA ERA DORADA ABSOLUTA",
            años: "(1982–1993)",
            eddieName: "POWERSLAVE EDDIE",
            eddieImg: powerslaveEddie,
            albumImg: theNumberOfTheBeast,
            albumTitle: "THE NUMBER OF THE BEAST",
            resumenAlbum: "La llegada de Bruce Dickinson desató un torbellino de óperas metaleras, giras colosales en estadios y la consolidación de Eddie como icono cultural.",
            textoHistoria: "Con grabaciones de obras maestras absolutas como 'The Number of the Beast' (1982), 'Piece of Mind' (1983) y 'Powerslave' (1984), la banda rompió récords globales. Sus giras mundiales eran eventos épicos con el gigantesco Eddie apareciendo en el escenario, inmortalizado en el legendario 'Live After Death'."
        },
        {
            id: 3,
            subtitulo: "ERA 3:",
            titulo: "EL PERÍODO OSCURO",
            años: "(1994–1999)",
            eddieName: "X-FACTOR EDDIE",
            eddieImg: xfactorEddie,
            albumImg: theVirtualEra,
            albumTitle: "THE VIRTUAL ERA",
            resumenAlbum: "Una etapa marcada por composiciones densas, atmósferas sombrías y una experimentación digital que desafió a los puristas de la vieja escuela.",
            textoHistoria: "Tras la salida de Bruce Dickinson en 1993, Blaze Bayley asumió la voz. Con él grabaron 'The X Factor' (1995) y 'Virtual XI' (1998), álbumes oscuros y conceptuales que dividieron a los fans pero demostraron la cruda resiliencia y versatilidad de la composición de Steve Harris."
        },
        {
            id: 4,
            subtitulo: "ERA 4:",
            titulo: "A BRAVE NEW FRONTIER",
            años: "(1999–PRESENTE)",
            eddieName: "BOOK OF SOULS EDDIE",
            eddieImg: bookOfSoulsEddie,
            albumImg: theSeventhSonTour,
            albumTitle: "THE SEVENTH SON TOUR",
            resumenAlbum: "El regreso de los hijos pródigos y la expansión a una alineación de tres guitarras demoledoras. La leyenda viva sigue facturando himnos progresivos.",
            textoHistoria: "En 1999, Bruce Dickinson y Adrian Smith regresaron. Con 'Brave New World' (2000) recuperaron toda su gloria. Álbumes posteriores como 'The Book of Souls' (2015) y el colosal 'Senjutsu' (2021) redefinieron su estatus de reyes indiscutibles del Heavy Metal moderno."
        }
    ];

    return (
        <div 
            className={styles.maidenPage}
            style={{ backgroundImage: `url(${portada})` }}
        >
            {/* TOP BAR + NAV CENTRADO (TOTALMENTE INTACTO) */}
            <header className={styles.header}>

                <nav className={styles.maidenNav}>
                    <div className={styles.navContainer}>
                        <div className={styles.navLinks}>
                            <Link to="/" className={styles.navItem}>INICIO</Link>
                            <Link to="/ironmaiden" className={styles.navItem}>IRON MAIDEN</Link>
                            <Link to="/ironmaiden/historia" className={`${styles.navItem} ${styles.maidenActive}`}>HISTORIA</Link>
                            <Link to="/ironmaiden/albunes" className={styles.navItem}>ÁLBUMES</Link>
                            <Link to="/ironmaiden/grupo" className={styles.navItem}>GRUPO</Link>
                        </div>

                        <div className={styles.navLogo}>
                            IRON MAIDEN
                        </div>
                    </div>
                </nav>
            </header>

            {/* TÍTULO PRINCIPAL DE LA PÁGINA */}
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>HISTORIA</h1>
                <p className={styles.tagline}>LA ÉPICA SAGA DE IRON MAIDEN</p>
            </div>

            {/* CONTENEDOR DE LA LÍNEA DE TIEMPO ESTILO RESTRUCTURADO */}
            <div className={styles.timelineContainer}>
                {erasData.map((era) => (
                    <div key={era.id} className={styles.eraBlock}>
                        
                        {/* Encabezado de Era */}
                        <div className={styles.eraHeader}>
                            <span className={styles.eraSub}>{era.subtitulo}</span>
                            <h2 className={styles.eraTitle}>{era.titulo}</h2>
                            <span className={styles.eraYears}>{era.años}</span>
                        </div>

                        {/* Estructura Split Screen de 3 Columnas sin Botones */}
                        <div className={styles.eraBody}>
                            
                            {/* Columna Izquierda: Imagen del Eddie */}
                            <div className={styles.eddieCard}>
                                <div className={styles.avatarWrapper}>
                                    <img src={era.eddieImg} alt={era.eddieName} className={styles.eddieImage} />
                                    <div className={styles.frameOverlay}></div>
                                </div>
                                <div className={styles.eddieInfoBox}>
                                    <h3>{era.eddieName}</h3>
                                </div>
                            </div>

                            {/* Columna Central: Texto Crónica */}
                            <div className={styles.historyTextContainer}>
                                <p className={styles.historyText}>{era.textoHistoria}</p>
                            </div>

                            {/* Columna Derecha: Tarjeta de Álbum */}
                            <div className={styles.albumCard}>
                                <div className={styles.albumFlex}>
                                    <img src={era.albumImg} alt={era.albumTitle} className={styles.albumCover} />
                                    <div className={styles.albumMeta}>
                                        <h4>{era.albumTitle}</h4>
                                        <p>{era.resumenAlbum}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        {/* Divisores de engranajes intermedios */}
                        {era.id !== erasData.length && (
                            <div className={styles.timelineDivider}>
                                <div className={styles.chainLine}></div>
                                <div className={styles.gearIcon}>⚙️</div>
                                <div className={styles.chainLine}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* FOOTER */}
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

export default IronMaidenHistoria;