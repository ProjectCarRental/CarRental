import React, { Component } from 'react';
//import { ReactComponenet as Logo} from './FrontImage.svg'
import logo from '../images/FrontImage.svg'
import InfoLogo from '../images/info-circle.svg'


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <img src={logo} alt="test front bild" />;
        <h1>Så här fungerar det.</h1>

        <div className="row">
          <ul>
            <img src={InfoLogo} alt="Infologo bild"/>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
            <p></p>
            <img src={InfoLogo} alt="Infologo bild" />
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
            <p></p>
            <img src={InfoLogo} alt="Infologo bild" />
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
          <p></p>
          </ul>
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
