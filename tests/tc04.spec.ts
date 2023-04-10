import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { WidgetsPage } from '../pages/widgets_page';
test.describe("TC04", ()=>{
  let homePage: HomePage;
  let widgetsPage: WidgetsPage;
  test.beforeEach(async ({page})=>{
    homePage = new HomePage(page);
    await homePage.open();
    widgetsPage = await homePage.goToWidgetsPage();
  })
  test('TC04 - Verify the progress bar', async ({ page }) => {
    const progressBarPage = await widgetsPage.goToProgressBarPage();
    await progressBarPage.clickStart();
    await progressBarPage.waitForProgressBarComplete();
    await progressBarPage.clickReset();
    await progressBarPage.waitForProgressBarStart();
    await progressBarPage.clickStart();
    await progressBarPage.waitForProgressBarComplete();
  })  
})
