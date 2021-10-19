import React from 'react';
import './marvelButton.css';

interface IMarvelButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export class MarvelButton extends React.Component<IMarvelButtonProps> {
  render(): JSX.Element {
    return (
      <button onClick={this.props.onClick} type="button" className="cta-btn cta-btn--outline cta-btn--light">
        <span className="innerfill">
          <span>{this.props.children}</span>
        </span>
      </button>
    );
  }
}
