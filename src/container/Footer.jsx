import React from 'react';
import '../styles/Sass/Footer.scss';

export function Footer() {
    return (
        <div className = 'footer'>
            <img className = 'footerImg' src='../assets/logo.png' alt='Logo del sitio' />
            <ul>
                <li>
                    <a href='#'>Preguntas frecuentes</a>
                    <a href='#'>Contáctanos</a>
                    <a href='#'>Información</a>
                </li>
            </ul>
            <h5>DocRed © 2021. Todos los derechos reservados</h5>
        </div>
    )
}
