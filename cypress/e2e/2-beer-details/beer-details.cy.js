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
describe('Beer detail test', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  it('should navigate to the beer The Physics', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[href*="beers"]').click()
    cy.url().should('include', '/beers')
    cy.contains('h4', 'The Physics').parent().find('a').click()
    cy.contains('h3', 'The Physics').should('exist')
  })
})