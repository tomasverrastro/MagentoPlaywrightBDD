import {test, expect, BrowserContext, Page} from '@playwright/test';
import {loginTestData} from '../utils/test-base';
import { setupTest } from '../utils/setup';


test.describe("Login tests", () => {
    loginTestData.forEach((data) => {
        test(`Login with Email: ${data.email || "(empty)"} and Password: ${data.password || "(empty)"}`, async({browser}) => {

            const { poManager, page } = await setupTest(browser);

            const navBar = poManager.getNavBar();
            const loginPage = poManager.getLoginPage();

            await navBar.goTo();
            await navBar.clickSignInBtn();
            await loginPage.enterEmail(data.email);
            await loginPage.enterPassword(data.password);
            await loginPage.clickSignInBtn();

            const actualText = await page.locator(data.textLocator).textContent();
            expect(actualText?.trim()).toContain(data.expectedText);
        });
    });
});

test('Logout test', async({browser}) => {

    const { poManager, page } = await setupTest(browser);

    const navBar = poManager.getNavBar();
    const loginPage = poManager.getLoginPage();

    await navBar.goTo();
    await navBar.clickSignInBtn();
    await loginPage.enterEmail(loginTestData[0].email);
    await loginPage.enterPassword(loginTestData[0].password);
    await loginPage.clickSignInBtn();

    await navBar.clickAccountDropBtn();
    await navBar.clickLogoutBtn();

    expect(await page.locator('.base').textContent()).toContain("You are signed out");
})


