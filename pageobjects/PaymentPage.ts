import {Locator, Page} from '@playwright/test';
export class PaymentPage{

    page : Page;
    nextBtn : Locator;
    placeOrderBtn : Locator;
    orderIDTxt : Locator;

    constructor(page : Page){
        this.page = page;
        this.nextBtn = page.locator("span:has-text('Next')");
        this.placeOrderBtn = page.locator("button[title='Place Order']");
        this.orderIDTxt = page.locator("a[class='order-number'] strong");
    }

    async clickNextBtn(){
        await this.nextBtn.click();
        await this.page.waitForLoadState('load');
    }

    async clickPlaceOrderBtn(){
        await this.placeOrderBtn.click();
        await this.page.waitForLoadState('load');
    }

    async getOrderID(){
        const orderID: any = await this.orderIDTxt.textContent();
        return orderID?.trim();
    }




   
}

module.exports = {PaymentPage}