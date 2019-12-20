import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download7.png';
import './Modal.css';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="question-box reverse">
      <img className="image" src={image} alt=""/>
      <div className="subdiv">
        <p>Quels sont les résultat de cette innovation ?</p>
        <Button color="warning" onClick={toggle}>Question 6</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}>Les résultat de cette innovation :</ModalHeader>
        <ModalBody>
        -Créer un réseau de mobilité hydrogène entre pays de l’UE. <br/>
        -Réduire les émissions associées aux véhicules traditionnels. <br/>
        -Stimuler les économies locales. <br/>
        -Promouvoir les PME/ PMI. <br/>
        -Promouvoir l’innovation dans les technologies de l’hydrogène dans tous les domaines.


        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;