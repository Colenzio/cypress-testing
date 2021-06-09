/// <reference types="cypress" />

describe('Test Case 4', () => {

    beforeEach(() => {

        cy.viewport(1280, 720)
        
    })

    const animalItems = [{Name: 'Stuffed Frog', Id: 2, orderAmount: 2, Price: 10.99},
                         {Name: 'Fluffy Bunny', Id: 4, orderAmount: 5, Price: 9.99},
                         {Name: 'Valentine Bear', Id: 7, orderAmount: 3, Price: 14.99}]
                         
    let subTotal = [];

    it('Go to shop page', () => {

        cy.visit(Cypress.env('url'))

        cy.contains('Shop')
          .click()
    })


    it('Buy items', () => {

        for (let i = 0; i < animalItems.length; i++){

            let animalPrice = animalItems[i].Price
            let animalAmount = animalItems[i].orderAmount;
            let price = animalPrice * animalAmount;
            subTotal.push(price)

         for (let x = 0; x < animalItems[i].orderAmount; x++){
            cy.get('[id=product-' + animalItems[i].Id)
              .contains('Buy')
              .click()
 } }})


    it('Go to cart & verify correct prices', () => {

        cy.get('[id=nav-cart')
        .click();

        for (let i in animalItems){
            cy.get('form')
              .children()
              .should('contain', animalItems[i].Name)
              .and('contain', animalItems[i].Price)
    }})


    it('Verify final price', () => {

        let arr = subTotal;
        let total = 0;
        for(let i in arr) { total += arr[i]; }

        cy.get('*[class^="total ng-binding"]')
          .contains('Total: '+ total)
          .should('exist')
    
          
    })
    


});
