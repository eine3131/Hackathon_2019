import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import image from '../images/download9.png';
import './Modal.css';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);
  const [nestedModal1, setNestedModal1] = useState(false);
  const [nestedModal2, setNestedModal2] = useState(false);
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

  return (
    <div className="question-box reverse">
      <img className="image" src={image} alt=""/>
      <div className="subdiv">
              <p>Quelles sont les manières de produire de l’H<sub>2</sub>? </p>
      <Button color="warning" onClick={toggle}>En savoir +</Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="answer-modal">
        <ModalHeader toggle={toggle}>Les manières pour produire de l'H<sub>2</sub> :</ModalHeader>
        <ModalBody>
          -<strong>Reformage de Gaz</strong> naturel à la vapeur d’eau (CO<sub>2</sub> capté et stocké pour produire un H<sub>2</sub> décarboné). <br/>
          <br/>
          -<strong>Electrolyse de l’eau</strong>: énergie propre, pas de CO<sub>2</sub> émis,  privilégié pour la transition énergétique. <br/>
          <br/>
          -<strong>Gazéification</strong> : combustion à partir de charbon . <br />
          <Button className="nest-button" color="info" onClick={toggleNested1}>Ses atouts ?</Button>
          <Modal isOpen={nestedModal1} toggle={toggleNested1} onClosed={closeAll ? toggle : undefined} className="answer-modal">
            <ModalHeader>Ses atouts ? : </ModalHeader>
            <ModalBody> -L’utilisation d’une ressources locale et renouvelable l’eau. <br/>
            
                        -Une production sans émission de carbone pour un transport non émissif à gaz à effet de serre. <br/>
                        <br/>
                        -Une mobilité non émissive de particules et sans naissance acoustiques. <br/>
                        -Un plein aussi rapide. <br/>
                        -Un doublement de l’autonomie des véhicules électriques. <br/>
                        -Un prix de l’hydrogènene à la pompe équivalent au gas oil. <br/>
                        -Une nouvelle filière pour l’économie du territoire. <br/>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggleNested1}>Fermer</Button>
            </ModalFooter>
          </Modal>

          <Button className="nest-button separate" color="info" onClick={toggleNested2}>QQ Chiffres :  </Button>
          <Modal isOpen={nestedModal2} toggle={toggleNested2} onClosed={closeAll ? toggle : undefined} className="answer-modal">
            <ModalHeader>QQ Chiffres :  </ModalHeader>
            <ModalBody> 900 000 tonnes d’hydrogène employées par les industries en France. <br/>
            <br/>
              Exemples des besoins en hydrogène pour véhicule : <br/>
              <strong>Voiture</strong>: entre 0,76kgH<sub>2</sub> et 0,95kgH<sub>2</sub>/100km en fonction du modèle.  <br/>
              <strong>Camions</strong>: 7,5 et 15,7kgH<sub>2</sub>/100km. <br/>
              <strong>Trains</strong>: 25 et 30kgH<sub>2</sub>/100km. <br/>
              <strong>Bateaux</strong>: 300 et 400kgH<sub>2</sub>/jour pour un bateau de 150-200 passagers.<br/>

      
            </ModalBody>

            <ModalFooter>
              <Button color="secondary" onClick={toggleNested2}>Fermer</Button>
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