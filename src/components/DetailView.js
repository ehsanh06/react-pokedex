import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
    const {id, name, sprite, type } = pokemon;

    return (
        <section className="detail__section">
            <img src={sprite} className="detail__sprite-image" alt="sprite" />
            <div className="detail__data-wrapper">
                <h1 className="detail__data-name">ID: {id} {name}</h1>
                <p className="detail__data-char">Type: {type}</p>
            </div>
        </section>
    );
};

export default DetailView;