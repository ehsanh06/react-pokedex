import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokeList.css';

const pokeClasses = require('../data/pokeClasses');


const PokeList = () => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
            />
        )
    })

    return (
        <section className="poke-list__section">
            {cells}
        </section>
    )
}

export default PokeList;