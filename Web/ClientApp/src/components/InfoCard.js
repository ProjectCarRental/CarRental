import React, { Component } from 'react';
import InfoLogo from '../images/info-circle.svg';
import './InfoCard.css';

export default class InfoCard extends Component {
  static displayName = InfoCard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top info_card_image" src={InfoLogo} alt="Infologo bild" />
        <div className="card-body">
          <p className="card-text">
            {this.props.infoText}
          </p>
        </div>
      </div>
    );
  }
}
