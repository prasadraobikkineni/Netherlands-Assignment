import { Locator, Page, expect } from "@playwright/test";
import Person from "../data/person";
import PersonFull from "../data/personFull";

export class PracticeFormPage{
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly mobileNumberField: Locator;
    readonly currentAddressField: Locator;
    readonly stateField: Locator
    readonly cityField: Locator
    readonly pictureField: Locator;
    readonly submitButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.emailField = page.getByPlaceholder('name@example.com');
        this.mobileNumberField = page.getByPlaceholder('Mobile Number');
        this.pictureField = page.getByLabel('Select picture');
        this.currentAddressField = page.getByPlaceholder('Current Address');
        this.stateField =  page.locator('#state svg');
        this.cityField = page.locator('#city svg');
        this.submitButton = page.locator("#submit");

    }
    async fillForm(person: PersonFull){
        await this.fillFirstNameField(person.firstName);
        await this.fillLastNameField(person.lastName);
        await this.fillEmailField(person.email);
        await this.fillGenderField(person.gender);
        await this.fillMobileField(person.mobile);
        await this.fillDateOfBirth(person.dateOfBirthMonth, person.dateOfBirthYear, person.dateOfBirthDay);
        await this.fillSubjectsField(person.subjects);
        await this.fillHobbiesField(person.hobbies);
        await this.fillPictureField(person.picture);
        await this.fillCurrentAddressField(person.currentAddress);
        await this.fillStateField(person.state);
        await this.fillCityField(person.city);
    }
    async fillFirstNameField(value: string){
        await this.fillField(this.firstNameField, value);
    }
    async fillLastNameField(value: string){
        await this.fillField(this.lastNameField, value);
    }
    async fillEmailField(value: string){
        await this.fillField(this.emailField, value);
    }
    async fillMobileField(value: string){
        await this.fillField(this.mobileNumberField, value);
    }
    async fillSubjectsField(value: string){
        await this.page.locator('.subjects-auto-complete__value-container').click();
        await this.page.locator('#subjectsInput').fill(value);
      
    }
    async fillPictureField(value: string){
        await this.page.screenshot({path: value})
        await this.pictureField.setInputFiles(value);
    }
    
    async fillGenderField(value: "Male"|"Female"|"Other"){
        await this.page.getByText(value, { exact: true }).click();
    }
    
    async fillHobbiesField(value:  "Sports"|"Reading"|"Music"){
        await this.page.getByText(value, { exact: true }).click();
    }
    async fillDateOfBirth(dateOfBirthMonth: number,dateOfBirthYear: number, dateOfBirthDayString: string){
        await this.page.locator('#dateOfBirthInput').click();
        await this.page.getByRole('combobox').nth(1).selectOption(dateOfBirthYear.toString());
        await this.page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption(dateOfBirthMonth.toString());
        await this.page.getByRole('option', { name: `Choose ${dateOfBirthDayString}` }).click();
    }

    async fillCurrentAddressField(value: string){
        await this.fillField(this.currentAddressField, value);
    }
    async fillStateField(value: string){
        await this.stateField.click();
        await this.page.getByText(value, { exact: true }).click();

    }
    async fillCityField(value: string){
        await this.cityField.click();
        await this.page.getByText(value, { exact: true }).click();

    }
    async verifySubmitIsNotVisible(){
        // await expect(this.submitButton.click({trial: true})).toBeFalsy();
        // await expect(this.submitButton).not.toBeVisible();
    }
    async submit(){
        await this.submitButton.click();
    }

    async fillField(field: Locator, value: string){
        await field.click();
        await field.fill(value);
    }
}