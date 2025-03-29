import { Browser, BrowserContext, Page } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';

export async function setupTest(browser: Browser) {
    const context: BrowserContext = await browser.newContext();
    const poManager = new POManager(context);
    await poManager.init();
    const page: Page = poManager.getPage();

    return { context, poManager, page };
}