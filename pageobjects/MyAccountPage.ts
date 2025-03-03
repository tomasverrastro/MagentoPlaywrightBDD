import {Locator, Page} from '@playwright/test';
export class MyAccountPage{

    page : Page;
    btnMyOrders : Locator;
    btnMyWishList : Locator;

    constructor(page : Page){
    this.page = page;
    this.btnMyOrders = page.locator("a[href='https://magento.softwaretestingboard.com/sales/order/history/']:nth-child(1)");
    this.btnMyWishList = page.locator("a:has-text('My Wish List'):visible");
    }

    async clickMyOrdersBtn(){
        await this.btnMyOrders.click();
    }

    async clickMyWishListBtn(){
        await this.btnMyWishList.click();
    }
}

module.exports = {MyAccountPage}