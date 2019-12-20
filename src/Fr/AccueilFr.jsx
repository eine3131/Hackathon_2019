import React from 'react';
import './AccueilFr.css';
import image from '../images/h2.png';


function AccueilFr() {
  return (
    <div className="background_accueuil">
      <div className="question">
          <h1 className="question_accueil">Et si on se tournait vers une mobilité plus responsable ? </h1>
          <img className="imageAccueil" src={image} alt=""/>
      </div>
    </div>
  );
}

export default AccueilFr;
