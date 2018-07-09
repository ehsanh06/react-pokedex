import React from 'react';
import PokeCell from './PokeCell';

import './styles/PokeList.css';


const PokeList = () => {
    return (
        <section className="poke-list__section">
            <PokeCell />        
            <PokeCell />        
            <PokeCell />        
        </section>
    )
}

export default PokeList;