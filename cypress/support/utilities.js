export function trackOrder(){
    const orderId="47294750";
    cy.request({
        failOnStatusCode: true,
        method: "GET",
        url: `${Cypress.env("host")}tracking/orders/?order_numbers=${orderId}`,
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        expect(response.status).to.equal(200);
const OrderId= response.body.orderid; 
return OrderId;
    })
}