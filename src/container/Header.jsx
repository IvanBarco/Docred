import React from 'react';
import '../styles/Sass/Header.scss';
import { AiFillSetting, AiOutlineDown } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { RiHome3Line } from 'react-icons/ri';

export default function Header() {
    return (
        <div>
            <div>
                <img src="../assets/logo.png" alt="logo del sitio Docred" />
                    <GiMagnifyingGlass />
                <div className="search">
                   <input type= 'text' value='¿Qué estas buscando?'/>
                </div>
                <button>                    
                    <RiHome3Line/> Inicio <AiOutlineDown />
                </button>
            </div>
            <span>
                <hr />
            </span>
            <div className= 'menuButton'>
                <img src="../assets/IvanBarcoPicture.jpg" alt="foto perfil" />
                <button className='hamburguerButton'>
                    <VscBellDot />
                    <AiFillSetting />
                </button>
            </div>
        </div>
    )
}
