import React from 'react';
import './ForumFr.css';

function ForumFr() {
  return (
    <div class="container">
      <div className="forum">
        <form id="contact_forum" action="" method="post">
          <h3 className="foire_aux_questions">Foire aux questions</h3>
          <p className="components-forum">
            <input className="input" placeholder="Titre de la question" type="text" />
          </p>
          <p className="components-forum">
          <textarea  className="texteAreaForum" placeholder="Message"></textarea>
          </p>
          <p className="components-forum">
            <button name="submit" type="submit" id="contact-submit">Envoyer</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForumFr;