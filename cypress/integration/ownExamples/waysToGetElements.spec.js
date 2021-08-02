/// <reference types="cypress"/>

describe("My first suit", () => {
    it("My first cenary", () => {
        cy.visit('/');

        cy.contains('Forms').click();
        cy.contains('Form Layouts').click()
            //get by name
        cy.get('input');

        //get by id
        cy.get('#inputEmail1');

        //by class
        cy.get('.input-full-width');

        //by attribute name
        cy.get('[placeholder]');

        //by attribute name and value
        cy.get('[placeholder="Email"]');

        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        //by tag name and attribute with value
        cy.get('input[placeholder="Email"]');

        //by two different attributes
        cy.get('input[placeholder="Email"][type="email"]');

        //tag name, atribute with value, id and class name
        cy.get('input[placeholder="Email"][type="email"]#inputEmail1.input-full-width');

        //the most recomended way by cypress
        cy.get('[data-cy="imputEmail1"]');
    })
});