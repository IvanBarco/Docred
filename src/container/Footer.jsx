import React from 'react';

export function Footer() {
    return (
        <div className = 'footer'>
            <img className = 'footerImg' src='./logo.png' alt='Logo del sitio' />
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
