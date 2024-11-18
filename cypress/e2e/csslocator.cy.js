describe('css locators', () => {
    // arrow function
    it('css locators', () => {

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("#search_query_top").type("Shirts")
        cy.get("[name='submit_search']").click();
        cy.get("[class='lighter']").contains("Shirts")


        
    });
});