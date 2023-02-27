class aboutPageLocators {
    constructor() {
        //Iframe Elements
        this.mainIframe = () => cy.get('#dynamic-form-contact_name');
     
    }
}
export default new aboutPageLocators();