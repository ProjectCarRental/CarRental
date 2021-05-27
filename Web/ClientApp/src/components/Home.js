import React, { Component } from 'react';
//import { ReactComponenet as Logo} from './FrontImage.svg'
import logo from '../images/FrontImage.svg'
import InfoCard from './InfoCard';
import FirstSlide from '../images/FirstSlide.svg';
import SecondSlide from '../images/SecondSlide.svg';
import ThirdSlide from '../images/ThirdSlide.svg';
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <img src={logo} alt="test front bild" />
        <h1 className="textToImgrMargin">Så här fungerar det.</h1>

        <div className="row">
          <div className="col-md-3">
            <InfoCard infoText="Börja med att skapa ett konto!"></InfoCard>
          </div>
          <div className="col-md-3">
            <InfoCard infoText="Logga in!"></InfoCard>
          </div>
          <div className="col-md-3">
            <InfoCard infoText="Registrera din bil på vår hemsida!"></InfoCard>
          </div>
          <div className="col-md-3">
            <InfoCard infoText="Hyr den bil som passar dig bäst!"></InfoCard>
          </div>
        </div>

        <h1 className="textToImgrMargin">Bilen för dig!</h1>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={FirstSlide} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>HejHej</h5>
                <p>Para</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={SecondSlide} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          </div>

      </div>
    );
  }
}
