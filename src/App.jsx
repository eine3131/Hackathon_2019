import React from 'react';
import './App.css';
import FormFr from './Fr/FormFr';
import AccueilFr from './Fr/AccueilFr';
import Accueil2Fr from './Fr/Accueil2Fr';
import NavFr from'./Fr/NavFr';
import FooterFr from './Fr/FooterFr';
import Modal1Fr from './Fr/Modal1Fr';
import Modal2Fr from './Fr/Modal2Fr';
import Modal3Fr from './Fr/Modal3Fr';
import Modal4Fr from './Fr/Modal4Fr';
import Modal5Fr from './Fr/Modal5Fr';
import Modal6Fr from './Fr/Modal6Fr';
import Modal7Fr from './Fr/Modal7Fr';
import ForumFr from './Fr/ForumFr';


function App() {
  return (
    <div className="App">
      <NavFr />
      <AccueilFr />
      <Accueil2Fr />
      <Modal1Fr/>
      <Modal2Fr/>
      <Modal3Fr/>
      <Modal4Fr/>
      <Modal5Fr/>
      <Modal6Fr/>
      <Modal7Fr/>
      <ForumFr />
      <FormFr />
      <FooterFr />
    </div>
  );
}

export default App;
