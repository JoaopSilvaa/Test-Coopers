import React from 'react';
import tatiana from '../assets/tatiana.png';
import './GetInTouch.css';
import mail from '../assets/Vector.png';

export default function GetInTouch() {
  return (
    <section className="GetInTouch">
      <img id="tatiana" src={ tatiana } alt="Tatiana" />
      <span id="square"> </span>
      <div id="titleGet">
        <img id="mail" src={ mail } alt="mail" />
        <h3>
          GET IN
          <br />
          <b>TOUCH</b>
        </h3>
      </div>
      <form id="formGet">
        <label className="labelForms" htmlFor="yourname">
          Your name
          <input
            id="yourname"
            type="text"
            placeholder="type your name here..."
          />
        </label>
        <div id="emailAndPhone">
          <label className="labelForms" htmlFor="email">
            Email*
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
            />
          </label>
          <label className="labelForms" htmlFor="telephone">
            Telephone*
            <input
              id="telephone"
              type="tel"
              placeholder="(  ) ____-____"
            />
          </label>
        </div>
        <label className="labelForms" htmlFor="message">
          Message*
          <input
            id="message"
            type="text"
            placeholder="Type what you want to say to us"
          />
        </label>
      </form>
      <button
        type="submit"
        id="buttonForm"
      >
        SEND NOW
      </button>
    </section>
  );
}
