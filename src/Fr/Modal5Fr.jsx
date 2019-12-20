import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download6.png';
import './Modal.css';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="question-box">
      <img className="image" src={image} alt=""/>
      <div className="subdiv">
        <p>Comment se concrétise le projet ?   </p>
      <Button color="warning" onClick={toggle}>Question 5</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}>Concrétisation du projet :</ModalHeader>
        <ModalBody>
        Avoir deux stations de distribution d’hydrogène entre Huesca et Pamier.<br/>
        A ce réseau de station est associé deux autres déjà existantes en France : <strong>à Rodez et Albi</strong>.
 

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;