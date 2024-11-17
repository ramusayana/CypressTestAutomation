describe("My First Test", function () {
  
  it("verify happy path", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.title().should("eq", "OrangeHRM");
  });

  it("verify negative test", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.title().should("eq", "OrangeHMRC");
  });
// testing the code to push git repo 

});
