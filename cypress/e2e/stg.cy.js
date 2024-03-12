import ordersPage from "../pages/ordersPage";
import UserData from "../fixtures/userData.json";
import {trackOrder} from "../support/utilities";
require('cypress-xpath');
describe('STG Tests', () => {
  it('Positive Scenario for Track OrderID', () => {

    const orderId="47294750";
    cy.visit(Cypress.env("host"));
    ordersPage.getClickOrderNumber().click();
    ordersPage.getOrderoRAwbNumber().type(orderId);
    ordersPage.getTrackOrder().should("be.visible").click();
   ordersPage.getOrdersTackId(3).should('be.visible').and("have.text",orderId);

   const apiOrderID= trackOrder();
   expect(apiOrderID).to.equal(orderId);
  });

  UserData.orders.forEach((order) => {
  it('Verify the Order tracking Error Messages ', () => {
    cy.visit(Cypress.env("host"));
    ordersPage.getClickOrderNumber().click();
    ordersPage.getOrderoRAwbNumber().type(order.orderId);
    ordersPage.getTrackOrder().click();
    ordersPage.getErrorMessage().should('be.visible').and('have.text',order.message);

    // I have tried to use to the below logic in a single 
    // cy.get('body').then((bodyElement) => {

    //   if(bodyElement.find("div.MuiBox-root.css-0").length>0){
    //     cy.get('.MuiBox-root > span').should('have.text',order.message);
    //   }
    //   else{
    //     cy.get("td:nth-child(3)").should("have.text",order.message);
    //   }

  })
  });
  it('Positive Scenario for Track AWB ID', () => {
    const awbId="YJ10499525";
    cy.visit(Cypress.env("host"));
    ordersPage.getClickAwb().click();
    ordersPage.getOrderoRAwbNumber().type(orderId);
    ordersPage.getTrackOrder().click();
   ordersPage.getOrdersTackId(2).should('be.visible').and("have.text",awbId);
  });

  UserData.awbNumbers.forEach((awb) => {
    it('Verify the Order tracking Error Messages ', () => {
      cy.visit(Cypress.env("host"));
      ordersPage.getClickAwb().click();
      ordersPage.getOrderoRAwbNumber().type(awb.awbId);
      ordersPage.getTrackOrder().click();
      // Not able to capture error meesages
      ordersPage.getErrorMessage().should('be.visible').and('have.text',awb.message);  
    })
    });


});
