import React, { Component } from 'react';
//import { ReactComponenet as Logo} from './FrontImage.svg'
import logo from '../images/FrontImage.svg'
import InfoCard from './InfoCard';
import InfoLogo from '../images/info-circle.svg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <img src={logo} alt="test front bild" />
        <h1>Så här fungerar det.</h1>

        <div className="row">
          <div className="col-md-3">
            <InfoCard infoText="hej hej hej"></InfoCard>
          </div>
          <div className="col-md-3">
            <InfoCard infoText="hej asdasdasd"></InfoCard>
          </div>
          <div className="col-md-3">
            <InfoCard infoText="hej ad nisse"></InfoCard>
          </div>
          <div className="col-md-3">
            <InfoCard infoText="kalle kalle kalle kalle "></InfoCard>
          </div>
        </div>

        <h1>Bilen för dig!</h1>
        <img src={InfoLogo} alt="tmpBil bild" />
        <p>khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
        khsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdfkhsjdfkjldsfslkdfhjsdflksdf
          </p>
      </div>
    );
  }
}
