import React from "react";
import "./Footer.css";
export function Footer() {
  const getCurrentDate = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className='app__footer'>
      <div className='footer__items'>
        <p className='date'>
          &copy; <span>{getCurrentDate()}</span> Redflower GmbH
        </p>
        <ul>
          <li>
            <a href='https://github.com/benkinase'>Github</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/benjamin-gbenimako'>
              LinkedIn
            </a>
          </li>
          <li>
            <a href='https://twitter.com/gbenimako'>Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
