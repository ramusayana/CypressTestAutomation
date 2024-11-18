require('cypress-xpath')

describe('xpath  locators', () => {
    // arrow function
    it('find number of elements', () => {

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//ul[@class='block_content products-block']/li").should('have.length', 7)


        
    });
});