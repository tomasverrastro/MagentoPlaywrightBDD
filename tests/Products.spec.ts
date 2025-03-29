import { test, expect, BrowserContext, Page } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import { loginTestData } from '../utils/test-base';

let context: BrowserContext;
let poManager: POManager;
let page: Page;

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    poManager = new POManager(context);
    await poManager.init();

    const navBar = poManager.getNavBar();
    const loginPage = poManager.getLoginPage();

    await navBar.goTo();
    await navBar.clickSignInBtn();
    await loginPage.enterEmail(loginTestData[0].email);
    await loginPage.enterPassword(loginTestData[0].password);
    await loginPage.clickSignInBtn();

    await context.storageState({ path: 'auth.json' });
    await context.close();
});

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext({ storageState: 'auth.json' });
    poManager = new POManager(context);
    await poManager.init();
    page = poManager.getPage();
});

test('TC_005 - Look for Men Jackets', async () => {
    const navBar = poManager.getNavBar();
    
    await navBar.goTo();
    await navBar.hoverMenBtn();
    await navBar.hoverMenTopsBtn();
    await navBar.clickMenJacketsBtn();

    expect(await page.title()).toContain("Jackets - Tops - Men");
});

test('TC_006 - Sort Men Jackets by Ascending Product Name', async () => {
    const navBar = poManager.getNavBar();
    const productListPage = poManager.getProductListPage();
    
    await navBar.goTo();
    await navBar.hoverMenBtn();
    await navBar.hoverMenTopsBtn();
    await navBar.clickMenJacketsBtn();
    await productListPage.selectSortBy("name");


    expect(await productListPage.isProductListOrderedByAscName()).toBeTruthy();
});

test('TC_007 - Sort any products by Descendant price', async () => {
    const navBar = poManager.getNavBar();
    const productListPage = poManager.getProductListPage();
    
    await navBar.goTo();
    await navBar.hoverMenBtn();
    await navBar.hoverMenTopsBtn();
    await navBar.clickMenJacketsBtn();
    await productListPage.selectSortBy("price");
    await productListPage.clickDescendingOrder();


    expect(await productListPage.isProductListOrderedByDescPrice()).toBeTruthy();
});

test('TC_008 - Go to product Details', async () => {
    const navBar = poManager.getNavBar();
    const productListPage = poManager.getProductListPage();
    const productDetailsPage = poManager.getProductDetailsPage();

    await navBar.goTo();
    await navBar.hoverMenBtn();
    await navBar.hoverGearBtn();
    await navBar.clickGearBagsBtn();

    await productListPage.clickProductWithName("Compete Track Tote");

    expect(await productDetailsPage.getProductDescription()).toContain("The Compete Track Tote holds a host of exercise supplies with ease. Stash your towel, jacket and street shoes inside. Tuck water bottles in easy-access external spaces. Perfect for trips to gym or yoga studio, with dual top handles for convenience to and from.");
});

test('TC_009 - Purchase 3 items', async () => {
    const navBar = poManager.getNavBar();
    const productListPage = poManager.getProductListPage();
    const paymentPage = poManager.getPaymentPage();
    const myAccountPage = poManager.getMyAccountPage();
    const myOrdersPage = poManager.getMyOrdersPage();

    await navBar.goTo();
    await navBar.hoverMenBtn();
    await navBar.hoverWomenBtn();
    await navBar.hoverWomenTopsBtn();
    await navBar.clickWomenHoodiesBtn();

    await productListPage.selectProductSizeColorAndAddToCart("Helena Hooded Fleece", "M", "Blue");

    await navBar.hoverMenBtn();
    await navBar.hoverGearBtn();
    await navBar.clickGearFitnessBtn();
    await productListPage.selectProductAndAddToCart("Sprite Foam Yoga Brick");

    await navBar.hoverWomenBtn();
    await navBar.hoverMenBtn();
    await navBar.hoverMenBottomBtn();
    await navBar.clickMenShortsBtn();

    await productListPage.selectProductSizeColorAndAddToCart("Apollo Running Short", "36", "Black");
    await navBar.clickCartBtn();
    await navBar.clickCheckoutBtn();

    await paymentPage.clickNextBtn();
    await paymentPage.clickPlaceOrderBtn();

    const orderID = await paymentPage.getOrderID();

    await navBar.clickAccountDropBtn();
    await navBar.clickMyAccountBtn();
    await myAccountPage.clickMyOrdersBtn();
    expect (await myOrdersPage.searchOrderId(orderID)).toBeTruthy();
    });

test('TC_010 - Filter products by color', async () => {
    const navBar = poManager.getNavBar();
    const productListPage = poManager.getProductListPage()

    await navBar.goTo();
    await navBar.hoverWomenBtn();
    await navBar.hoverMenBtn();
    await navBar.hoverMenTopsBtn();
    await navBar.clickMenTeesBtn();

    await productListPage.clickColorDropDown();
    await productListPage.clickColor("Red");

    expect (await productListPage.verifySelectedColor("Red")).toBeTruthy();
    
    });

test('TC_011 - Search product', async () => {
    const navBar = poManager.getNavBar();
    const productName : string = "Yoga Jackets"

    await navBar.goTo();
    await navBar.searchProduct(productName);
    expect(await page.locator("span[data-ui-id='page-title-wrapper']").textContent()).toContain(productName);
    });