import { test, expect } from '@playwright/test';
import Person from '../data/person';
import { HomePage } from '../pages/home_page';
import { ElementsPage } from '../pages/elements_page';
import { WebTablePage } from '../pages/web_tables_page';
import { WebTablePageForm } from '../pages/web_tables_page_form';
test.describe("TC01", () => {
  let homePage: HomePage;
  let elementsPage: ElementsPage;
  let webTablesPage: WebTablePage;
  let webTablesPageForm: WebTablePageForm;
  const person: Person = {
    "firstName": "Alden",
    "lastName": "Cantrell",
    "email": "test@test.com",
    "age": 30,
    "salary": 12345,
    "department": "QA"
  };
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
    elementsPage = await homePage.goToElementsPage();
    webTablesPage = await elementsPage.goToWebTablesPage();
    webTablesPageForm = await webTablesPage.clickAdd();
    await webTablesPageForm.fillAndSubmitForm(person);
    webTablesPage = new WebTablePage(page);
  });
  test('TC01- Scenario A - Verify user can enter new data into the table', async ({ page }) => {
    await webTablesPage.verifyPerson(4, person);
  });

  test("TC01- Scenario B - Verify user can edit the row in the table", async ({ page }) => {

    webTablesPageForm = await webTablesPage.clickEdit(2); 
    await webTablesPageForm.fillFirstNameField('Gerimedica');
    await webTablesPageForm.fillLastNameField('BV');
    await webTablesPageForm.submit();
    await webTablesPage.verifyPersonFirstName(2, "Gerimedica");
    await webTablesPage.verifyPersonLastName(2, "BV")

  })
});

