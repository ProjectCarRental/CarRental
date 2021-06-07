import React, { Component } from 'react';
import './InfoCard.css';

export default class InfoCard extends Component {
  static displayName = InfoCard.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top imageSize" src={this.props.infoImage} />
        <div className="card-body">
          <p className="card-text">
            {this.props.infoText}
          </p>
        </div>
      </div>
    );
  }
}
