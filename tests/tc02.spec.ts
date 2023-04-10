import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { ElementsPage } from '../pages/elements_page';

test.describe("TC02", ()=>{
  let homePage: HomePage;
  let elementsPage: ElementsPage;
  test.beforeEach(async ({page})=>{
    homePage = new HomePage(page);
    await homePage.open();
    elementsPage = await homePage.goToElementsPage();
  })
  test('TC02 - Verify broken image', async ({ page }) => {
    const brokenLinksPage = await elementsPage.goToBrokenLinksPage();
    await brokenLinksPage.verifyBrokenImage()
  })  
});