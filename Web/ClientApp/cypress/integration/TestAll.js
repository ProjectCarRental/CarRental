/// <reference types="cypress"/>
describe('TestAll', () => {
  it('Home', () => {
    cy.visit('/')
    cy.get('[data-cy=home-button').click()
    cy.location('pathname').should('equals', '/')
  });

  it('AddCar', () => {
    cy.visit('/')
    cy.get('[data-cy=AddCar-button').click()
    cy.location('pathname').should('equals', '/AddCar')
    cy.get('[data-cy=registrationNumber').type('ABC 123')
    cy.get('[data-cy=model').type('Ferrari')
    cy.get('[data-cy=productionYear').type('2015')
    cy.get('[data-cy=kilometersRun').type('10')
    cy.get('[data-cy=price').type('2000')
    cy.get('[data-cy=SubmitAddCar-button').click()
  });

  it('AddCustomer', () => {
    cy.visit('/')
    cy.get('[data-cy=Login-button').click()
    cy.location('pathname').should('equals', '/Login')
    cy.get('[data-cy=SignUp-button').click()
    cy.location('pathname').should('equals', '/signup')
    cy.get('[data-cy=firstname').type('Pontus')
    cy.get('[data-cy=lastname').type('Haglund')
    cy.get('[data-cy=email').type('haglund.pontus@gmail.com')
    cy.get('[data-cy=password').type('123123')
    cy.get('[data-cy=AddCustomer-button').click()
  });

  it('Login', () => {
    cy.visit('/')
    cy.get('[data-cy=Login-button').click()
    cy.location('pathname').should('equals', '/Login')
    cy.get('[data-cy=loginEmail').type('haglund.pontus@gmail.com')
    cy.get('[data-cy=loginPassword').type('123123')
    cy.get('[data-cy=SubmitLogin-button').click()
  });

  it('AboutUs', () => {
    cy.visit('/')
    cy.get('[data-cy=AboutUs-button').click()
    cy.location('pathname').should('equals', '/AboutUs')
  });
});