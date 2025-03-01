import {test, expect} from '@playwright/test';
import {POManager} from '../pageobjects/POManager'

test('First test', async({page}) => {

    const poManager = new POManager(page);
    const navBar = poManager.getNavBar();

    await navBar.goTo();
    await navBar.hoverMenBtn();
    await navBar.hoverMenTopsBtn();
    await navBar.clickMenHoodiesBtn();
    await page.pause();

})