import React, { Component } from 'react';
// Run "npm install react-bootstrap bootstrap@4.6.0"
import Button from 'react-bootstrap/Button';
import './Footer.css';

export class Footer extends Component {
  static displayName = Footer.name;

  constructor(props) {
    super(props);
  }


  render() {
    return (
      
      
        <footer className="footer-bs">
        <div className="row">
          <div className="col-md-3 footer-brand animated fadeInLeft">
              <h2>Car Rental AB</h2>
              <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
              <p>© 2021, All rights reserved</p>
            </div>
          <div className="col-md-4 footer-nav animated fadeInUp">
              <h4>FAQ</h4>
            {/*<div className="col-md-6">*/}
            {/*  <ul className="pages">*/}
            {/*      <li><a href="#">Travel</a></li>*/}
            {/*      <li><a href="#">Nature</a></li>*/}
            {/*      <li><a href="#">Explores</a></li>*/}
            {/*      <li><a href="#">Science</a></li>*/}
            {/*      <li><a href="#">Advice</a></li>*/}
            {/*    </ul>*/}
            {/*  </div>*/}
            <div className="col-md-6">
              <ul className="list">
                  <li><a href="/AboutUs">About Us</a></li>
                  <li><a href="#">Contacts</a></li>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <h4>Kundservice</h4>
            <div className="col-md-6">
              <ul className="list">
                  <li>070 444 22 33</li>
                  <li>hyrbil@carrentalab.se</li>
                  
                </ul>
              </div>

            </div>
          <div className="col-md-2 footer-social animated fadeInDown">
              <h4>Följ oss!</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">RSS</a></li>
              </ul>
            </div>
          <div className="col-md-3 footer-ns animated fadeInRight">
              <h4>Ladda ner!</h4>
              <p>Här kan ni ta del av vår rika applikation för en snabbare och enklare upplevelse</p>
            
            <li><Button>Iphone</Button></li>
            <p></p>
            <li><Button>Android</Button></li>
            
            </div>
            </div>
    </footer>
    );
  }
}