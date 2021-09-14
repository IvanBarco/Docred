import React from 'react';
import { BsStar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { BsArrowUpRight } from 'react-icons/bs';
import '../styles/Sass/Decoco.scss'

export function Decoco(props) {
    return (
        <div>
             
            <p className='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut a voluptates alias sint sed esse consequuntur itaque. Mollitia nobis ex culpa omnis, porro saepe perferendis aperiam quidem recusandae dolores.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus repudiandae velit quidem dolore necessitatibus hic voluptatum aliquid et iusto. Pariatur ipsam reprehenderit explicabo optio fugit nihil incidunt iure illo consequuntur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut a voluptates alias sint sed esse consequuntur itaque. Mollitia nobis ex culpa omnis, porro saepe perferendis aperiam quidem recusandae dolores.<br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus amet sunt deserunt dicta ex sint vero natus rem suscipit voluptate libero magnam eos dolorem, ipsum debitis est veritatis provident officiis.<br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi officiis laborum quaerat minus id, sunt eveniet explicabo laudantium repellendus quasi dolores cupiditate quod, dolore quo error nulla possimus iusto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum recusandae autem, ratione amet corporis, adipisci voluptate enim perspiciatis ipsum exercitationem rem quos, accusamus debitis deserunt explicabo repellendus culpa fugit?<br />
            </p>
            <div className='decoco'>
                <button className='decoco-highlight'><BsStar />Destacar</button>
                <button className='decoco-coment'><BsChat />Comentar</button>
                <button className='decoco-share'><BsArrowUpRight />Compartir</button>
            </div>
        </div>
    );
}
