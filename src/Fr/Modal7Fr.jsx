import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download1.png';
import './Modal.css';

const ModalExample = (props) => {
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="question-box">
        <img className="image" src={image} alt=""/>
        <div className="subdiv">
          <p>Les partenaires du projet ?   </p>
          <Button color="warning" onClick={toggle}>Question 7</Button>
        </div>
        <Modal isOpen={modal} toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}>Qui sont ils?</ModalHeader>
        <ModalBody>
        Le projet <strong>POCTEFA H2Piyr</strong> regroupe de nombreux partenaires de chacune des trois régions concerné par le programme.<br/>
        <strong>FHA</strong>, fondation de recherche privé sans but lucratif a été créé pour promouvoir l’utilisation de l’hydrogène comme vecteur d’énergie.<br/>
        <strong>H2 IMPULSION</strong> est une société familiale de l’Aveyron qui développe depuis 1998 des actifs de production d’électricité renouvelable.<br/>
        <strong>AD’OCC</strong>, agence de développement économique, de l’export et de l’innovation de la région Occitanie/Pyrénées-méditerranée, s’engage à construire la région de demain.

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default ModalExample;