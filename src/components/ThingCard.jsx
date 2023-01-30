import React from 'react';
import PropTypes from 'prop-types';
import fill from '../assets/Fill1.png';
import './ThingCard.css';

export default function ThingCard({ thing }) {
  return (
    <div className="ThingCard">
      <img className="imageThing" src={ thing.img } alt={ thing.alt } />
      <span className="function">function</span>
      <img src={ fill } alt="logo coopers" className="logoThing" />
      <p className="textThing">{ thing.text }</p>
      <span className="readMoreThing">read more</span>
    </div>
  );
}

ThingCard.propTypes = {
  thing: PropTypes.objectOf.isRequired,
};
