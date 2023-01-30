import React from 'react';
import './Footer.css';
import bg from '../assets/BGFooter.png';
import bgGreen from '../assets/BGreen.png';

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={ bg } id="bgFooter" alt="imagem de fundo listra preta" />
      <div className="textFooter">
        <span id="need">Need help?</span>
        <span id="emailFooter">
          coopers@coopers.pro
          <br />
        </span>
        <span id="reserv">©2021 Coopers. All rights reserved.</span>
      </div>
      <img src={ bgGreen } id="bgFooter2" alt="imagem de fundo verde" />
    </footer>
  );
}
