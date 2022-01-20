/// <reference types="cypress"/>

describe("My first suit", () => {

    it.only('first Test', () => {
         cy.visit('http://automationpractice.com');

         cy.get('.login').click()
         cy.get('#email_create').type('mymail@mail.com')

         cy.get('#SubmitCreate > span').click(

    });
});