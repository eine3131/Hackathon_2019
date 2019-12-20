import React from 'react';
import './Accueil2Fr.css';
import VideoIntro from '/home/user/hackathon/Hackathon_2019/src/components/images/Vidéo Introduction.mp4';


function Accueil2Fr() {
  return (
    <div className="background_accueuil2">
      <div className="introduction">
        <div className="intro_droite">
          <p className="paragraphe_intro">
            Avec plus de 165 790 collaborateurs dans le monde, le groupe EDF est le premier électricien mondial, leader des énergies bas carbone.
            Engagé dans le développement des territoires, EDF promet de répondre aux défis de la mobilité durable : réduire les émissions de gaz à effet de serre ainsi que la pollution locales en zones urbaines.
            Ressource inépuisable et énergie propre, l’hydrogène s’apparente comme la solution innovante.
            Naissant d’une coopération transfrontalière, le projet H2PIYR est le projet de votre avenir.
          </p>
        </div>
        <div className="intro_gauche">
          <video className='videoIntro' autoPlay loop muted>
            <source src={VideoIntro} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Accueil2Fr;
