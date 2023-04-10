import { Locator, Page } from "@playwright/test";
import Person from "../data/person";

export class WebTablePageForm{
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly ageField: Locator;
    readonly salaryField: Locator;
    readonly deparmentField: Locator;
    readonly submitButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.emailField = page.getByPlaceholder('name@example.com');
        this.ageField = page.getByPlaceholder('Age');
        this.salaryField = page.getByPlaceholder('Salary');
        this.deparmentField = page.getByPlaceholder('Department');
        this.submitButton = page.getByRole('button', { name: 'Submit' });

    }
    async fillAndSubmitForm(person: Person){
        await this.fillFirstNameField(person.firstName);
        await this.fillLastNameField(person.lastName);
        await this.fillEmailField(person.email);
        await this.fillAgeField(person.age.toString());
        await this.fillSalaryField(person.salary.toString());
        await this.fillDepartmentField(person.department);
        await this.submit();
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
    async fillAgeField(value: string){
        await this.fillField(this.ageField, value);
    }
    async fillSalaryField(value: string){
        await this.fillField(this.salaryField, value);
    }
    async fillDepartmentField(value: string){
        await this.fillField(this.deparmentField, value);
    }
    async submit(){
        await this.submitButton.click();
    }

    async fillField(field: Locator, value: string){
        await field.click();
        await field.fill(value);
    }
}