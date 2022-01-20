/// <reference types="cypress"/>

describe('Suit Sing in', () =>{
    it('create user', () =>{
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.login').click()
        cy.get('#email_create').type('testmail@mail.com')
        cy.get('#SubmitCreate > span').click()
    })
})