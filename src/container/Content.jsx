import React from 'react';
import '../styles/Sass/Content.scss';
import { Card } from '../components/Card';
import { Decoco } from '../components/Decoco';

export default function Content() {
    return (
        <div className='content'>
            <Card />
            <Decoco />
        </div>
    )
}
