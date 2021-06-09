/// <reference types="cypress" />

describe('Test Case 3', () => {

    beforeEach(() => {

        cy.viewport(1280, 720)
    })

    it('Go to shop page', () => {

        cy.visit(Cypress.env('url'))

        cy.contains('Shop')
          .click()
    })

    it('Successfull buying of items',  () => {

        //Use each products id & click
        cy.get('[id=product-6')
          .contains('Buy')
          .dblclick()

        cy.get('[id=product-4')
          .contains('Buy')
          .click()
     })

     it('Go to cart & verify correct items',  () => {

        //Nav to cart
        cy.get('[id=nav-cart')
          .click()

        //Verify form contains appropriate animal items after selection
        cy.get('form')
          .children()
          .should('contain', 'Funny Cow')
          .and('contain', 'Fluffy Bunny')
          
     })


    });
