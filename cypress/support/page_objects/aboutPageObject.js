/// <reference types="cypress-iframe" />
import 'cypress-iframe'

export class NavigationPage{
    goToAboutPage(){
        cy.get('[src="/html/src/iframes.htm"]')
            .its('0.contentDocument')
            .its('body')
            .find('[src="/html/menu.htm"]')
            .its('0.contentDocument')
            .its('body')
            .contains('Agree')
            .click({force: true})
            
            cy.get('[src="/html/src/iframes.htm"]')
            .its('0.contentDocument')
            .its('body')
            .find('[src="/html/menu.htm"]')
            .its('0.contentDocument')
            .its('body')
            .contains(' About us')
            .click({force: true})
    }
    getHrefLinkAboutPage(){
      const filenameHrefLinks = 'reports/hrefLinksAboutPage.txt'
        cy.get('[src="/html/src/iframes.htm"]')
        .its('0.contentDocument')
        .its('body')
        .find('[src="/html/menu.htm"]')
        .its('0.contentDocument')
        .its('body')
        .find('a').each(page => {
            const link = page.prop('href')
            const nameResult = " Link in the About Page: " + link + "\n"
            cy.request({
              url:"Url in the About Page: " + link,
              failOnStatusCode: false  // allow good and bad response to pass into then
            }).then(response => {
              Cypress.log({
                name: "Link in the About Page: " + link,
                message: "Status code returned: " + response.status
              })
              cy.writeFile(filenameHrefLinks,nameResult, { flag: 'a+' })
          })
        })
    }

    getListButtonsAboutPage(){
      const filenameButtons = 'reports/aboutPageButtons.txt'
      cy.get('[src="/html/src/iframes.htm"]')
      .its('0.contentDocument')
      .its('body')
      .find('[src="/html/menu.htm"]')
      .its('0.contentDocument')
      .its('body')
      .find('button').each((page) => {
        const id = page.prop('id')
        const nameResult = "Button Present the Id Button is : " + id + "\n"
          Cypress.log({
            name: "Button Present the Id Button is : " + id 
          })
          cy.writeFile(filenameButtons,nameResult, { flag: 'a+' })
      }) 
  }
}

export const navigateTo = new NavigationPage()