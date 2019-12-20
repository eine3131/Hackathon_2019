import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download5.png';
import './Modal.css';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="question-box">
      <img className="image" src={image} alt=""/>
      <div className="subdiv">
        <p>POCTEFA kézaco?</p>
      <Button color="warning" onClick={toggle}>Question 3</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}> Explication du projet Espagne France :</ModalHeader>
        <ModalBody>
        <strong>POCTEFA</strong> est un programme européen de coopération transfrontalière afin de promouvoir le développement durable entre Espagne, France et Andorre.<br/> 
        <br/>
        Le but de la coopération est de dynamiser l’innovation et la compétitivité, promouvoir la mise en valeur des ressources locales. <br/>
        <br/>
        <strong>Le projet, où?</strong> <br/>Les départements des Pyrénées, l’Andorre et les régions pyrénéennes de l’Espagne.<br/>
        <br/>
        <strong>Quel est l’objectif de POCTEFA?</strong><br/> 
        De renforcer l’intégration économique et sociale entre Espagne-France et Andorre. <br/>
        <br/>
        Cette aide financière de 1,6 millions d’euros va permettre de développer les activités économiques, sociales et environnementales en faveur d’un milieu durable.<br/>


        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Fermer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;