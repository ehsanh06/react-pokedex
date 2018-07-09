import React from 'react';
import './styles/DetailView.css';

const DetailView = () => {
    return (
        <section className="detail__section">
            <img className="detail__sprite-image" />
            <div className="detail__data-wrapper">
                <h1 className="detail__data-name"></h1>
                <p className="detail__data-char"></p>
            </div>
        </section>
    );
};

export default DetailView;