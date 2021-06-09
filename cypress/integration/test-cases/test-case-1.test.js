/// <reference types="cypress" />

describe('Test Case 1', () => {

    beforeEach(() => {

        //Create format for GUI
        cy.viewport(1280, 720)
    })

    it('Go to contact page', () => {

        //Load in URL form .json
        cy.visit(Cypress.env('url'))
        //Click Contact href
        cy.contains('Contact')
          .click()
    })

    it('Validate form errors', () => {

        //Click 'Submit' button, wait 1 second
        cy.contains('Submit', { timeout: 1000 })
          .click()

        //Grab mandatory field error elements & validate error messages
        cy.get('[id=forename-err')
          .contains('Forename is required')
          .should('exist')
        cy.get('[id=email-err')
          .contains('Email is required')
          .should('exist')
        cy.get('[id=message-err')
          .contains('Message is required')
          .should('exist')
    })

    it('Successfull form population', () => {

        //Populate fields with data
        cy.get('[id=forename')
          .type('David')
        cy.get('[id=email')
          .type('davidtest@email.com')
        cy.get('[id=message')
          .type('This is a message')

        //Validate error messages are gone
        cy.contains('Forename is required')
          .should('not.exist')
        cy.contains('Email is required')
          .should('not.exist')
        cy.contains('Message is required')
          .should('not.exist')

    })


    }) 
