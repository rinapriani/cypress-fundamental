// <reference types ="cypress" />

describe('Login with fixture data', function() {
    it('Should try to login', () => {
        cy.visit('https://www.saucedemo.com/', {timeout : 10000})
        

        cy.fixture("saucedemo").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user')

            cy.get('#password').clear()
            cy.get('#password').type('secret_sauce')

            cy.get('#login-button').click()

            cy.url().should('include', '/inventory.html')

            //add to cart sauce labs backpack
            cy.contains('Sauce Labs Backpack')
            cy.get('#add-to-cart-sauce-labs-backpack').click()

             //add to cart sauce labs fleece jacket
             cy.contains('Sauce Labs Fleece Jacket')
             cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()

             //checkout cart
             cy.get('#shopping_cart_container').click()
             cy.url().should('include','/cart.html')
             cy.get('#checkout').click()

             //input name, dan postal code
             cy.fixture("saucedemo2").then(address => {
                const firstName = address.firstName
                const lastName = address.lastName
                const postalCode = address.postalCode

                cy.get('#first-name').clear()
                cy.get('#first-name').type('Rina')
    
                cy.get('#last-name').clear()
                cy.get('#last-name').type('Apriani')

                cy.get('#postal-code').clear()
                cy.get('#postal-code').type('41161')
    
                cy.get('#continue').click()
             })
        })
    });
});