import React from 'react';
import './FormFr.css';

function Formulaire() {
return (
  <div class="container">
    <div className="formulaire">
      <form id="contact" action="" method="post">
        <h3 className="getintouch">Pour recevoir notre newsletter</h3>
        <p className="components-form">
          <input className="input" placeholder="Nom" type="text" />
        </p>
        <p className="components-form">
          <input className="input" placeholder="Prénom" type="text" />
        </p>
        <p className="components-form">
          <input className="input" placeholder="Email" type="email" />
        </p>
        <p className="components-form">
          <textarea  className="texteArea" placeholder="Message"></textarea>
        </p>
        <p className="components-form">
          <button name="submit" type="submit" id="contact-submit">Envoyer</button>
        </p>
      </form>
    </div> 
  </div>
)
}
export default Formulaire;

