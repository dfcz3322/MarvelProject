import React from 'react'
import './marvelButton.css'

interface IMarvelButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  margin?: string;
}

export class MarvelButton extends React.Component<IMarvelButtonProps> {
    render() {
        return (
            <button
            onClick={this.props.onClick}
                type="button"
                className="cta-btn cta-btn--outline cta-btn--light"
            >
                <span className="innerfill">
                    <span>{this.props.children}</span>
                </span>
            </button>
        )
    }
}
