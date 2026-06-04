import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './grupo.module.css';

const AcdcGrupo = () => {
    const [selected, setSelected] = useState(null);

    const members = {
        originales: [
            {
                name: "Dave Evans",
                role: "Vocalista",
                years: "1973–1974",
                img: require("../../images/acdc/grupo1.jpg"),
                info: "Primer vocalista de AC/DC antes de Bon Scott."
            },
            {
                name: "Angus Young",
                role: "Guitarra solista",
                years: "1973–presente",
                img: require("../../images/acdc/grupo2.jpg"),
                info: "Icono principal de la banda."
            },
            {
                name: "Malcolm Young",
                role: "Guitarra rítmica",
                years: "1973–2014",
                img: require("../../images/acdc/grupo3.jpg"),
                info: "Creador del sonido base de AC/DC."
            },
            {
                name: "George Young",
                role: "Bajo / Producción",
                years: "1973–1975",
                img: require("../../images/acdc/grupo4.jpg"),
                info: "Apoyo clave en estudio."
            }
        ],

        pasajeros: [
            {
                name: "Bon Scott",
                role: "Vocalista",
                years: "1974–1980",
                img: require("../../images/acdc/grupo5.jpg"),
                info: "Voz clásica del rock."
            },
            {
                name: "Mark Evans",
                role: "Bajo",
                years: "1975–1977",
                img: require("../../images/acdc/grupo6.jpg"),
                info: "Bajista de la etapa inicial."
            },
            {
                name: "Simon Wright",
                role: "Batería",
                years: "1983–1989",
                img: require("../../images/acdc/grupo7.jpg"),
                info: "Batería de transición."
            },
            {
                name: "Chris Slade",
                role: "Batería",
                years: "1990–1995 / 2015–2020",
                img: require("../../images/acdc/grupo8.jpg"),
                info: "Potente baterista en giras."
            }
        ],

        actuales: [
            {
                name: "Brian Johnson",
                role: "Vocalista",
                years: "1980–2016 / 2020–presente",
                img: require("../../images/acdc/grupo9.jpg"),
                info: "Voz de Back in Black."
            },
            {
                name: "Stevie Young",
                role: "Guitarra rítmica",
                years: "2014–presente",
                img: require("../../images/acdc/grupo10.jpg"),
                info: "Reemplazo de Malcolm."
            },
            {
                name: "Cliff Williams",
                role: "Bajo",
                years: "1977–2016 / 2020–presente",
                img: require("../../images/acdc/grupo11.jpg"),
                info: "Base sólida del sonido."
            },
            {
                name: "Phil Rudd",
                role: "Batería",
                years: "1975–1983 / 1995–2015 / 2020–presente",
                img: require("../../images/acdc/grupo12.jpg"),
                info: "Groove clásico de AC/DC."
            }
        ]
    };

    const renderSection = (title, list) => (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>{title}</h2>

            <div className={styles.grid}>
                {list.map((m) => (
                    <div
                        key={m.name}
                        className={styles.poster}
                        onClick={() => setSelected(m)}
                    >
                        <img src={m.img} alt={m.name} />

                        <div className={styles.overlay}>
                            <h3>{m.name}</h3>
                            <p>{m.role}</p>
                            <span>{m.years}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className={styles.page}>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>INICIO</Link>
                <Link to="/acdc" className={styles.link}>ACDC</Link>
                <Link to="/acdc/historia" className={styles.link}>HISTORIA</Link>
                <Link to="/acdc/albunes" className={styles.link}>ÁLBUMES</Link>
                <Link to="/acdc/grupo" className={`${styles.link} ${styles.active}`}>GRUPO</Link>
            </nav>

            <header className={styles.header}>
                <h1>⚡ AC/DC ARCHIVO COMPLETO ⚡</h1>
                <p>13 miembros en la historia de la banda</p>
            </header>

            {renderSection("🔥 ORIGINALES", members.originales)}
            {renderSection("💀 PASAJEROS", members.pasajeros)}
            {renderSection("⚡ ACTUALES", members.actuales)}

            {selected && (
                <div className={styles.modal} onClick={() => setSelected(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selected.img} alt={selected.name} />

                        <div>
                            <h2>{selected.name}</h2>
                            <h4>{selected.role}</h4>
                            <p>{selected.years}</p>
                            <p>{selected.info}</p>
                        </div>
                    </div>
                </div>
            )}

            <footer className={styles.footer}>
                © {new Date().getFullYear()} AC/DC ⚡ ROCK LEGEND
            </footer>

        </div>
    );
};

export default AcdcGrupo;