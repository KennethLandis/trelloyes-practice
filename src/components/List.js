import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {

    const listOfCards = props.cards.map((card) =>
        <Card 
            key={card.key}
            title={card.title}
            content={card.content}
        />
            ) 

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {listOfCards}
            </div>
        </section>

    )
}

export default List;