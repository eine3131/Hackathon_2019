import React from 'react';
import './FooterFr.css';
import {Link} from 'react-router-dom';

function FooterFr() {
  return (
    <div className="footer_français">
      <div className="containerFooter">
      <div className="iconeFooter">
        <p className="poctefa">POCTEFA</p>
      </div>
        <div className="Explorer">
          <p className="titreFooter">Explorer</p>
          <p className="explorerPage"><Link to="/Form">Formulaire</Link></p>
          <p className="explorerPage"><Link to="/Forum">Forum</Link></p>
        </div>
        <div className="suivreFooter">
          <p className="titreFooter">Suivre</p>
          <a  className="#" href="https://twitter.com/EDF_Occitanie?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            Twitter
              </a>
          <a className="#" href="https://occitanie-pulse.edf.com/">
            Edf Occitanie
              </a>
        </div>

        <div className="mentionsLégales">
          <p className="titreFooter">Mentions légales</p>
        </div>

      </div>
      <div className="copyright">
        <p className="copyrightAll">© 2019 All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default FooterFr;
