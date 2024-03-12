import apiData from "../fixtures/apiData.json";
describe('STG API Tests', () => {
    apiData.ordersData.forEach((orderId))
    it('OrderID Tests', () => {
    
        cy.request({
            failOnStatusCode: true,
            method: "GET",
            url: `${Cypress.env("host")}tracking/orders/?order_numbers=${orderId}`,
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            expect(response.status).to.equal(200);

        });
    });
});

apiData.ordersData.forEach((awbid))
it('AWB ID Tests', () => {

    cy.request({
        failOnStatusCode: true,
        method: "GET",
        url: `${Cypress.env("host")}tracking/orders/?awb_numbers=${awbid}`,
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        expect(response.status).to.equal(200);

    });
});
