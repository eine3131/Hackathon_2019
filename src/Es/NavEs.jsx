import React from 'react';
import './NavFr.css';
import logo from '/home/user/quetes/Hackathon_2019/src/components/images/logo.jpg';
import {NavLink} from 'react-router-dom';

function NavFr() {
  return (
    <div className="bar_nav">
      <div className="logo">
        <NavLink exact path="/"><img className="icone" src={logo} alt="logo-poctefa" /></NavLink>
      </div>
      <div className="langue">
        <a href="#" className="français">FR</a>
        <a href="#" className="espagnol">ES</a>      
      </div>
    </div>
  );
}

export default NavFr;
