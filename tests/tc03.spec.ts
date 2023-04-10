import { test, expect } from '@playwright/test';
import Person from '../data/person';
import { HomePage } from '../pages/home_page';
import { ElementsPage } from '../pages/elements_page';
import { WebTablePage } from '../pages/web_tables_page';
import { WebTablePageForm } from '../pages/web_tables_page_form';
import PersonFull from '../data/personFull';
import { FormsPage } from '../pages/forms_page';
import { PracticeFormPage } from '../pages/practice_form_page';
test.describe("TC03", () => {
  let homePage: HomePage;
  let formsPage: FormsPage;
  let practiceFormPage: PracticeFormPage;
  const person: PersonFull = {
    "firstName": "Gerimedica",
    "lastName": "BV",
    "email": "test@test.com",
    "gender":"Male",
    "mobile": "0123456789",
    "dateOfBirthMonth": 0,
    "dateOfBirthYear": 1990,
    "dateOfBirthDay": "Monday, January 15th, 1990",
    "subjects": "Cypress Assignment",
    "hobbies": "Reading",
    "picture": "screenshot.png",
    "currentAddress": "Netherlands",
    "state":"NCR",
    "city": "Delhi"
  };
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
    formsPage = await homePage.goToFormsPage();
    practiceFormPage = await formsPage.goToPracticeFormPage();
    await practiceFormPage.fillForm(person);
  });
  test('TC03 - Fill form and unable to submit', async ({ page }) => {
    await practiceFormPage.verifySubmitIsNotVisible();
  });
});
// test('test', async ({ page }) => {
//   await page.goto('https://demoqa.com/');
//   await page.getByRole('heading', { name: 'Forms' }).click();
//   await page.getByText('Practice Form').click();
//   await page.getByPlaceholder('First Name').click();
//   await page.getByPlaceholder('First Name').fill('Gerimedica');
//   await page.getByPlaceholder('Last Name').click();
//   await page.getByPlaceholder('Last Name').fill('BV');
//   await page.getByPlaceholder('name@example.com').click();
//   await page.getByPlaceholder('name@example.com').fill('test@test.com');
//   await page.getByText('Male', { exact: true }).click();
//   await page.getByPlaceholder('Mobile Number').click();
//   await page.getByPlaceholder('Mobile Number').fill('0123456789');
//   await page.locator('#dateOfBirthInput').click();
//   await page.locator('#dateOfBirthInput').click();
//   await page.getByRole('combobox').nth(1).selectOption('1990');
//   await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('0');
//   await page.getByRole('option', { name: 'Choose Monday, January 15th, 1990' }).click();
//   await page.locator('.subjects-auto-complete__value-container').click();
//   await page.locator('#subjectsInput').fill('Cypress Assignment');
//   await page.getByText('Reading').click();
//   await page.screenshot({path:"screenshot.png"})
//   await page.getByLabel('Select picture').setInputFiles('screenshot.png');
//   await page.getByPlaceholder('Current Address').click();
//   await page.getByPlaceholder('Current Address').fill('Netherlands');
//   await page.locator('#state svg').click();
//   await page.getByText('NCR', { exact: true }).click();
//   await page.locator('#city svg').click();
//   await page.getByText('Delhi', { exact: true }).click();
//   await page.locator("#submit").click()

 
// });