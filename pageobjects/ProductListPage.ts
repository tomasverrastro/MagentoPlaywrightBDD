import {Locator, Page} from '@playwright/test';
export class ProductListPage{

    page : Page;
    txtCategoryName : Locator;
    btnColorDropDown : Locator;
    selectSortByDropDown : Locator;
    btnDescendingOrder : Locator;
    selectPageSize : Locator;


    constructor(page : Page){
        this.page = page;
        this.txtCategoryName = page.locator(".base");
        this.btnColorDropDown = page.locator("div[role='tab']:has-text('Color')");
        this.selectSortByDropDown = page.locator("#sorter:visible");
        this.btnDescendingOrder = page.locator(".action.sorter-action.sort-asc:visible");
        this.selectPageSize = page.locator("#limiter:visible");
    }

    async getCategoryName(){
        return await this.txtCategoryName.textContent();
    }

    async clickColorDropDown(){
        await this.btnColorDropDown.click();
    }

    async selectSortBy(option : string){
        await this.selectSortByDropDown.selectOption(option);
    }

    async clickDescendingOrder(){
        await this.btnDescendingOrder.click();
    }

    async selectPageSizeOption(option : string){
        await this.selectPageSize.selectOption(option);
    }
}

module.exports = {ProductListPage}