import React from 'react';
import '../styles/Sass/Footer.scss';

export function Footer() {
    return (
        <div className = 'footer'>
            <img className = 'footer_img' src='../assets/logo.png' alt='SiteLogo' />
                <a href='#'>Preguntas frecuentes</a>
                <a href='#'>Contáctanos</a>
                <a href='#'>Información</a>
            <h5>DocRed © 2021. Todos los derechos reservados</h5>
        </div>
    )
}
