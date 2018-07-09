import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png';

const PokeCell = ({ pokeClass }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`, backgroundPosition};

    return <button style={style} className="poke-list__poke-cell"></button>
};

export default PokeCell;