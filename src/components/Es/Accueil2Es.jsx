import React from 'react';
import './Accueil2Fr.css';
import VideoIntro from '/home/user/quetes/Hackathon_2019/src/components/images/Vidéo Introduction.mp4';


function Accueil2Fr() {
  return (
    <div className="background_accueuil2">
      <div className="introduction">
        <div className="intro_droite">
          <p className="paragraphe_intro">
          Con más de 165.790 empleados en el mundo, el grupo EDF es el primer electricista mundial, líder de las energías bajas en carbono.
          Comprometido con el desarrollo de los territorios, EDF promete responder a los desafíos de la movilidad sostenible: reducir las emisiones de gases de efecto invernadero y la contaminación local en las zonas urbanas.
          El hidrógeno, recurso inagotable y energía limpia, se asemeja a la solución innovadora.
          El proyecto H2PIYR, que nace de la cooperación transfronteriza, es el proyecto de su futuro.
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
