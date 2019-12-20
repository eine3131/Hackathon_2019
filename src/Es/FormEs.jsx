import React from 'react';
import './FormEs.css';

function Formulaire() {
return (
  <div class="container">
    <div className="formulaire">
      <form id="contact" action="" method="post">
        <h3 className="getintouch">contáctenos</h3>
        <p className="components-form">
          <input className="input" placeholder="Su nombre" type="text" />
        </p>
        <p className="components-form">
          <input className="input" placeholder="Su apellido" type="text" />
        </p>
        <p className="components-form">
          <input className="input" placeholder="So email" type="email" />
        </p>
        <p className="components-form">
          <textarea  className="texteArea" placeholder="Mensage"></textarea>
        </p>
        <p className="components-form">
          <button name="submit" type="submit" id="contact-submit">Enviar</button>
        </p>
      </form>
    </div> 
  </div>
)
}
export default Formulaire;

