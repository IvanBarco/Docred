import React from 'react';
import '../styles/Sass/Footer.scss';

export function Footer() {
    return (
        <div className = 'footer'>
            <img className = 'footer_img' src='../assets/logo.png' alt='SiteLogo' />
            <ul className='footer-ul'>
                <li className='footer_list'>
                    <p><a href='#'>Preguntas frecuentes</a></p>
                </li>
                <li className='footer_list'>
                    <p><a href='#'>Contáctanos</a></p>
                </li>
                <li className='footer_list'>
                    <p><a href='#'>Información</a></p>
                </li>
            </ul>
            <h5>DocRed © 2021. Todos los derechos reservados</h5>
        </div>
    )
}
