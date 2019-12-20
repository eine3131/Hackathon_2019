import React from 'react';
import './NavFr.css';
import logo from '/home/user/hackathon/Hackathon_2019/src/components/images/logo.jpg';

function NavFr() {
  return (
    <div className="bar_nav">
      <div className="logo">
        <img className="icone" src={logo} alt="logo-poctefa" /> 
      </div>
      <div className="langue">
        <a href="#" className="français">FR</a>
        <a href="#" className="espagnol">ES</a>      
      </div>
    </div>
  );
}

export default NavFr;
