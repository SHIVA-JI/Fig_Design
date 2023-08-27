import React from 'react';
import './Card.css'; // Create a CSS file for styling
import phillip from './philipp-arlt-8EyB_RvaWtY-unsplash.png';

const Card = () => {
  return (
    <>
    <div className="card">
        <div className="card-image">
            <img src={phillip} alt="Card" />
        </div>
        <div className="overlay">
            <div className="arrow">&#10148;</div>
        </div>
        <div className="card-image">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
          ultrices erat. Maecenas auctor, neque ut finibus posuere, urna tellus
          fermentum arcu.
          </p>
        </div>

    </div>
    
    </>
  );
};

export default Card;

