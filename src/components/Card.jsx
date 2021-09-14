import React from 'react'
import '../styles/Sass/Card.scss'
import { BsStar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';

export function Card() {
    return (
        <div className='card'>
            <div className='card_img'>
                <figure>
                    <img src="../assets/img1.png" alt="tema de noticia" height='50px' height='50px'/>
                </figure> 
            </div>
            <div className='card_info'>
                <p><b>Lorem ipsum dolor, sit amet consectetur adipisicing elit:<br /> Esse unde provident volutpad</b>
                    <br />By:lorem impsum Dolor.
                </p>
                <span>
                    <hr />
                </span>
                <div className='decovi'>
                    <h4><BsStar />50</h4><h4><BsChat />40</h4><h4><AiOutlineEye />75</h4>
                </div>
            </div>
        </div>
    )
}
