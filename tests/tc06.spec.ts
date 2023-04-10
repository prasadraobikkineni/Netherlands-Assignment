import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { InteractionsPage } from '../pages/interactions_page';
test.describe("TC06", ()=>{
  let homePage: HomePage;
  let interactionsPage: InteractionsPage;
  test.beforeEach(async ({page})=>{
    homePage = new HomePage(page);
    await homePage.open();
    interactionsPage = await homePage.goToInteractionsPage();
  })
  test('TC06 - Verify user can drag and drop', async ({ page }) => {
    const droppablePage = await interactionsPage.goToDroppablePage();
    await droppablePage.dragToPanel();
    await droppablePage.verifyDragged();
  })  
});