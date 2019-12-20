import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download8.png';
import './Modal.css';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="question-box">
      <img className="image" src={image} alt=""/>
      <div className="subdiv">
        <p>Vous avez dit solutions Green ?</p>
        <Button color="warning" onClick={toggle}>En savoir +</Button>
      </div>
      
      <Modal isOpen={modal}  toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}>Présentation de l'hydrogène :</ModalHeader>
        <ModalBody>
        L’hydrogène est un vecteur d’énergie qui préserve l’environnement en répondant aux défis de la mobilité durable : <br/><br/>
        Réduire les émissions de gaz à effet de serre ainsi que la pollution locales en zones urbaines.<br/>
        <br/>
        <br/>
        De nombreux pays multiplient les initiatives dans le domaine de l’hydrogène mobilité, comme l’Allemagne, le Royaume Uni ou encore les pays Scandinaves qui ont lancé d’ambitieux programmes de déploiement de stations hydrogène y compris dans les coeurs de ville avec des solutions de transport collectif par bus hydrogène. 

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Fermer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;