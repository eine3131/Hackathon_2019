import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download2.png';
import './Modal.css';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);
  const [nestedModal1, setNestedModal1] = useState(false);
  const [nestedModal2, setNestedModal2] = useState(false);
  const [nestedModal3, setNestedModal3] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested1 = () => {
    setNestedModal1(!nestedModal1);
    setCloseAll(false);
  }

  const toggleNested2 = () => {
    setNestedModal2(!nestedModal2);
    setCloseAll(false);
  }

  const toggleNested3 = () => {
    setNestedModal3(!nestedModal3);
    setCloseAll(false);
  }


  return (
    <div className="question-box reverse">
      <img className="image" src={image} alt=""/>
      <div className="subdiv">
        <p>Et le projet H2PIYR dans tout ça ?  </p>
        <Button color="warning" onClick={toggle}>Question 4</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}>Le projet H2PIYR :</ModalHeader>
        <ModalBody>
          Le projet de corridor hydrogène est proposé dans les régions pyrénnées appellé H2PIR est un corridor transfortalier de stations de distributions d’hydrogène pour véhicule automobiles qui reliera les régions pyrénéennes d’Espagne et France avec l’Europe du Nord et l’Europe Centrale, d’Espagne à la France sans oublier l’Andorre.<br/>
          <br />
          <Button className="nest-button separate" color="info" onClick={toggleNested1}>Le saviez-vous ? </Button>
          <Modal isOpen={nestedModal1} toggle={toggleNested1} onClosed={closeAll ? toggle : undefined} className="answer-modal">
            <ModalHeader>Le saviez-vous ? </ModalHeader>
            <ModalBody> Rodez terre d’accueil, ADN du projet :
L’Etat, la Région de Midi pyrénées, la CCI de l’Aveyron, Aveyron Expansion, les agglomérations de Rodez et de Decazeville, la Poste…. ont permis le succès et la validation projet de rodez.
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleNested1}>Fermer</Button>
            </ModalFooter>
          </Modal>

          <Button className="nest-button separate" color="info" onClick={toggleNested2}>Quelles caractéristiques aura la station ?  </Button>
          <Modal isOpen={nestedModal2} toggle={toggleNested2} onClosed={closeAll ? toggle : undefined} className="answer-modal">
            <ModalHeader>Quelles caractéristiques aura la station ?  </ModalHeader>
            <ModalBody> -Une production décarbonaté d’hydrogène par électrolyse. <br/>
                        -Une capacité de production à 150kg/jour. <br/>
                        -L’installation et la distribution  d’hydrogène pour véhicules, la plus importante de France. <br/>
                        -Permet d’alimenter 80 véhicules avec un plein à moins de 5 min. <br/>
                        -La possibilité d’alimenter des véhicules lourd et autobus. <br/>
                        -Un engagement de 20 partenaires publics et privés.<br/>

            </ModalBody>

            <ModalFooter>
              <Button color="secondary" onClick={toggleNested2}>Fermer</Button>
            </ModalFooter>
          </Modal>

          <Button className="nest-button separate" color="info" onClick={toggleNested3}>Et au niveau de  l’objectif ?  </Button>
          <Modal isOpen={nestedModal3} toggle={toggleNested3} onClosed={closeAll ? toggle : undefined} className="answer-modal">
            <ModalHeader>Et au niveau de  l’objectif ? </ModalHeader>
            <ModalBody> 
              Favoriser le développement de technologies innovantes en matière de ressources naturelles à traver la coopération<br/>
              <br/>
              <strong>Mais combien de temps ?</strong> <br/>
              La mission H2PIYR se projette à moyen terme sur une durée de 5 ans : <strong>du 1er juillet 2016 au 30 juin 2021.</strong><br/>
            </ModalBody>

            <ModalFooter>
              <Button color="secondary" onClick={toggleNested3}>Fermer</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Fermer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;