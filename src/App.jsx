import React from 'react';
import './App.css';
import AccueilFr from './components/Fr/AccueilFr';
import Accueil2Fr from './components/Fr/Accueil2Fr';
import NavFr from'./components/Fr/NavFr';
import FooterFr from './components/Fr/FooterFr';


function App() {
  return (
    <div className="App">
      <NavFr />
      <AccueilFr />
      <Accueil2Fr />
      <FooterFr />
    </div>
  );
}
export default App;
