import {Locator, Page} from '@playwright/test';
import { StatementSync } from 'node:sqlite';
export class ProductListPage{

    page : Page;
    txtCategoryName : Locator;
    btnColorDropDown : Locator;
    selectSortByDropDown : Locator;
    btnDescendingOrder : Locator;
    selectPageSize : Locator;
    productsTable: Locator;
    productName: Locator;
    productPrice: Locator;


    constructor(page : Page){
        this.page = page;
        this.txtCategoryName = page.locator(".base");
        this.btnColorDropDown = page.locator("div[role='tab']:has-text('Color')");
        this.selectSortByDropDown = page.locator("#sorter:visible");
        this.btnDescendingOrder = page.locator(".action.sorter-action.sort-asc:visible");
        this.selectPageSize = page.locator("#limiter:visible");
        this.productsTable = page.locator(".products.list.items.product-items");
        this.productName = page.locator(".products.list.items.product-items a[class='product-item-link']");
        this.productPrice = page.locator(".normal-price .price:visible");
    }

    async getCategoryName(){
        return await this.txtCategoryName.textContent();
    }

    async clickColorDropDown(){
        await this.btnColorDropDown.click();
    }

    async clickColor(color : string){
        await this.page.locator(`.block-content.filter-content .swatch-option.color[option-label="${color}"]`).click();
        await this.page.waitForLoadState('load');
    }

    async selectSortBy(option: string) {
        await this.productsTable.waitFor();
        const productTableBefore = await this.productsTable.innerHTML(); 
        await this.selectSortByDropDown.selectOption(option);

        await this.page.waitForFunction(
            (previousHTML) => {
                const currentHTML = document.querySelector('.products.list.items.product-items')?.innerHTML;
                return currentHTML !== previousHTML;
            },
            productTableBefore
        );
    }

    async clickDescendingOrder(){
        await this.productsTable.waitFor();
        const productTableBefore = await this.productsTable.innerHTML(); 
        await this.btnDescendingOrder.click();

        await this.page.waitForFunction(
            (previousHTML) => {
                const currentHTML = document.querySelector('.products.list.items.product-items')?.innerHTML;
                return currentHTML !== previousHTML;
            },
            productTableBefore
        );
    }

    async clickProductWithName(name: string){
        await this.page.locator(`a:has-text('${name}')`).click();
    }

    async selectProductAndAddToCart(name: string){
        await this.page.locator(`li:has-text('${name}')`).hover();
        await this.page.locator(`li:has-text('${name}') button`).click();
        await this.page.locator("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']").waitFor({state:"visible"});
    }

    async selectProductSizeColorAndAddToCart(name: string, size: string, color: string){
        await this.page.locator(`li:has-text('${name}') div[aria-label="${size}"]`).click();
        await this.page.locator(`li:has-text('${name}') div[aria-label="${color}"]`).click();
        await this.page.locator(`li:has-text('${name} As Low')`).hover();
        await this.page.locator(`li:has-text('${name}') button[title="Add to Cart"]`).click();
        await this.page.locator("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']").waitFor({state:"visible"});
    }
    
    async selectPageSizeOption(option : string){
        await this.selectPageSize.selectOption(option);
    }

    async isProductListOrderedByAscName(): Promise<boolean> {
        const productNames: string[] = [];
    
        for (let i = 0; i < await this.productName.count(); ++i) {
            const name = await this.productName.nth(i).textContent();
            console.log(name);
            if (name) productNames.push(name.trim());
        }
    
        return productNames.join() === [...productNames].sort().join();
    }

    async isProductListOrderedByDescPrice(): Promise<boolean> {
        const prices: number[] = [];
    
        for (let i = 0; i < await this.productPrice.count(); ++i) {
            const priceText = await this.productPrice.nth(i).textContent();
            if (priceText) {
                const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
                prices.push(price);
            }
        }

        return prices.join() === [...prices].sort((a, b) => b - a).join();
    }

    async verifySelectedColor(color : string){
        return await this.page.locator(`.swatch-option.color.selected[aria-label='${color}']`).first().isVisible();
    }
}

module.exports = {ProductListPage}