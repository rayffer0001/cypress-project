/// <reference types = "cypress" />

describe('Drag and drop a file', { testIsolation: false }, () => {
    var email = 'ssjunipero+rayfferautoadmin1@gmail.com';
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
  
    before(() => {
        
      cy.clearLocalStorage()
      it("should login succesfully", () => {
        cy.intercept("GET", "/qorta-shared-dependencies/importmap.json").as(
        "Dependency");
        cy.visit("/login");
        cy.wait("@Dependency");
        cy.get("#idp-discovery-username").should("be.visible").type(email);
        cy.get("#idp-discovery-submit").should("be.visible").click();
        cy.get("#okta-signin-password").should("be.visible").type("G0F0rBr0ke!");
        cy.get("#okta-signin-submit").should("be.visible").click();
    //cy.pause();
        cy.get("#people-table-title__text", { timeout: 50000 }).should("be.visible");
        cy.location("pathname").should("equal", "/people");
        cy.get('#user-name-label').should('be.visible').contains(email);
    });

    })

    


    
  
})

