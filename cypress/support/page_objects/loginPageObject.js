/// <reference types="cypress-iframe" />
import 'cypress-iframe'

export class LoginPage{
  
  goToLoginPage()
   {
    cy.get('[src="/html/src/iframes.htm"]')
    .its('0.contentDocument')
    .its('body')
    .find('[src="/html/menu.htm"]')
    .its('0.contentDocument')
    .its('body')
    .find('[class="fal fa-sign-in me-2"]')
    .click({multiple: true, force: true})
  }

  goToSyncUp()
  {
    cy.get('[src="/html/src/iframes.htm"]', { timeout: 40000 }).then($firstIframe => {
      const $secondIframeReference = $firstIframe.contents().find('[src="/html/menu.htm"]', { timeout: 40000 });
      cy.wrap($secondIframeReference).as('secondIframeReference'); 
    
      cy.get('@secondIframeReference').then($secondIframe => {
        const $emailElement = $secondIframe.contents().find('input[type="email"]', { timeout: 40000 });
        const $passElement = $secondIframe.contents().find('input[type="password"]', { timeout: 40000 });
    
        cy.wrap($emailElement).type("luis.blandon@10pearls.com"); 
        cy.wrap($passElement).type("luis.blandon");
      });
    });
 }
}

export const loginPage = new LoginPage()