import React from 'react';
import '../styles/Sass/Content.scss';
import { Card } from '../components/Card';
import { Decoco } from '../components/Decoco';

export function Content() {
    return (
        <div className='content'>
            <Decoco />
            <aside>
                <Card />
                <Card />
            </aside>
        </div>
    )
}
