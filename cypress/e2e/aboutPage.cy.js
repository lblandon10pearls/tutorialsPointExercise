import { navigateTo } from "../support/page_objects/aboutPageObject"
import { loginPage } from "../support/page_objects/loginPageObject"

describe('Test go to about us', () => {

    before('Open application', () => {
        cy.visit('/',{failOnStatusCode: false})
    })
    it('Go to About Page', () => {
        navigateTo.goToAboutPage()
    })
    it('Get All Links About Page', () => {
      //  navigateTo.getHrefLinkAboutPage() 
    })
    it ('Get all buttons About page', () =>{
        navigateTo.getListButtonsAboutPage()
    })
    it ('Go to Login Page', () =>{
        loginPage.goToLoginPage()
    })
    it ('Sync Up', () =>{
        loginPage.goToSyncUp()
    })
})