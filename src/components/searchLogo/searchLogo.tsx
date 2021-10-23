import React from 'react';
import './searchLogo.css';

const searchLogoImg =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png';

export function SearchLogo(): JSX.Element {
  return <img className="searchLogo--img" src={searchLogoImg}></img>;
}
