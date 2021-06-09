/// <reference types="cypress" />

describe('Test Case 2', () => {

    beforeEach(() => {

        cy.viewport(1280, 720)
    })

    //Loop through test 5 times
    for (let i = 0; i < 5; i++){

    it('Go to contact page', () => {

      cy.visit(Cypress.env('url'))

        cy.contains('Contact', {timeout:2000})
          .click()
    })

     it('Successfull contact form submission',  () => {

      //Populate contact form
      cy.get('[id=forename')
      .type('David')
      cy.get('[id=email')
      .type('davidtest@email.com')
      cy.get('[id=message')
      .type('This is a message')


        cy.contains('Submit')
          .click()

        //Grab success message using class - not recommended
        cy.get('*[class^="alert alert-success"]', {timeout:8000})
          .should('exist')

     })


}});
