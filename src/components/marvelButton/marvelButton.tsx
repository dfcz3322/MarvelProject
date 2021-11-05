import React, { ReactNode } from 'react';
import './marvelButton.css';

interface IMarvelButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export function MarvelButton(props: IMarvelButtonProps): JSX.Element {
  return (
    <button onClick={props.onClick} type="button" className="cta-btn cta-btn--outline cta-btn--light">
      <span className="innerfill">
        <span>{props.children}</span>
      </span>
    </button>
  );
}
