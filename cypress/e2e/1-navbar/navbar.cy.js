/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe('Navigation test', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  it('should navigate to the cgu page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="cgu"]').click()
    cy.url().should('include', '/cgu')
    cy.get('h1').should('have.text', '🧑‍⚖️ Mentions légales')
  })

  it('should navigate to the contact form page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="contact"]').click()
    cy.url().should('include', '/contact')
    cy.get('h1').should('have.text', '📧 Formulaire de contact')
  })

  it('should navigate to beers list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="beers"]').click()
    cy.url().should('include', '/beers')
    cy.get('h1').should('have.text', '🍺 Liste des bières disponibles')
  })
})