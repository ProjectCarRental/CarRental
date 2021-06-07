import React, { Component } from 'react';
import logo from '../images/FrontImage.svg'
import InfoCard from './InfoCard';
import delorean from '../images/delorean-1.jpg'
import saab from '../images/Saab-9-5-Aero-Hot.jpg'
import volvo from '../images/volvoxc70.jpg'
import createAccount from '../images/createAccount.jpg'
import login from '../images/login.png'
import register from '../images/Register.jpg'
import rentCar from '../images/rentCar2.png'
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
            <img className="card-img-top" src={createAccount} />
            <InfoCard  infoText="Börja med att skapa ett konto!"></InfoCard>
          </div>
          <div className="col-md-3">
            <img className="card-img-top" src={login} />
            <InfoCard  infoText="Logga in!"></InfoCard>
          </div>
          <div className="col-md-3">
            <img className="card-img-top" src={register} />
            <InfoCard infoText="Registrera din bil på vår hemsida!"></InfoCard>
          </div>
          <div className="col-md-3">
            <img className="card-img-top" src={rentCar} />
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
              <img className="d-block w-100" src={delorean} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={saab} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={volvo} alt="Third slide" />
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
