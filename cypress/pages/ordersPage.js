class orddersPage{
    getClickOrderNumber(){
        return cy.get("button[value='order']");
    }
    getOrderoRAwbNumber(){
    return    cy.get(`input[id^=":r"]`);
    }

    getTrackOrder(){
     return   cy.xpath("//button[normalize-space()='Track Order']");
    }
    getErrorMessage(){
        return cy.get('.MuiBox-root > span');
    }

    getOrdersTackId(row){
        return  cy.get(`td:nth-child(${row})`)
    }

    getClickAwb(){
        return cy.get("button[value='awb']");
    }

}
export default new orddersPage();