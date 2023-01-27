import React from 'react';
import tatiana from '../assets/tatiana.png';
import './GetInTouch.css';

export default function GetInTouch() {
  return (
    <section className="GetInTouch">
      <img src={ tatiana } alt="Tatiana" />
      <h3>
        GET IN
        <br />
        TOUCH
      </h3>
      <form>
        <label htmlFor="yourname">
          Your name
          <input
            id="yourname"
            type="text"
            placeholder="type your name here..."
          />
        </label>
        <div>
          <label htmlFor="email">
            Email*
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
            />
          </label>
          <label htmlFor="telephone">
            Telephone*
            <input
              id="telephone"
              type="tel"
              placeholder="(  ) ____-____"
            />
          </label>
        </div>
        <label htmlFor="message">
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
      >
        SEND NOW
      </button>
    </section>
  );
}
