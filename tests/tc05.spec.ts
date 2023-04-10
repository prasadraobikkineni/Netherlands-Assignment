import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { WidgetsPage } from '../pages/widgets_page';

test.describe("TC05", ()=>{
  let homePage: HomePage;
  let widgetsPage: WidgetsPage;
  test.beforeEach(async ({page})=>{
    homePage = new HomePage(page);
    await homePage.open();
    widgetsPage = await homePage.goToWidgetsPage();
  })
  test('TC05 - Verify the tooltip', async ({ page }) => {
    const tooltipPage = await widgetsPage.goToTooltipPage();
    await tooltipPage.hoverTooltipButton();
    await tooltipPage.waitForTooltipToShow();
    await tooltipPage.verifyTooltipText("You hovered over the Button");
  })  
})