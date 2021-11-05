import React from 'react';
import './comicsLogo.css';

const comicsLogoImg =
  'https://i.pinimg.com/736x/06/59/ee/0659ee4a07929a77ea29da8b6d996754--marvel-logo-marvel-comics.jpg';

export function ComicsLogo (): JSX.Element {
    return (
      <>
        <img className="comicsLogo--img" src={comicsLogoImg}></img>
        <h5 className="comicsLogo--text">COMICS</h5>
      </>
    );
  }
