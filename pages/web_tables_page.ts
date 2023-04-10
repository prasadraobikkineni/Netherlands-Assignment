import { Locator, Page, expect } from "@playwright/test";
import Person from "../data/person";
import { WebTablePageForm } from "./web_tables_page_form";

export class WebTablePage{
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameRetriever: (row: number)=>Locator;
    readonly lastNameRetriever: (row: number)=>Locator;
    readonly emailRetriever: (row: number)=>Locator;
    readonly ageRetriever: (row: number)=>Locator;
    readonly salaryRetriever: (row: number)=>Locator;
    readonly departmentRetriever: (row: number)=>Locator
    readonly editButtonRetriever: (row: number)=>Locator
    constructor(page: Page){
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.firstNameRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div`).first();
        this.lastNameRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div:nth-child(2)`);
        this.ageRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div:nth-child(3)`);
        this.emailRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div:nth-child(4)`);
        this.salaryRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div:nth-child(5)`);
        this.departmentRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div:nth-child(6)`);
        this.editButtonRetriever = (row: number) => this.page.locator(`div:nth-child(${row}) > .rt-tr > div:nth-child(7)`).getByTitle('Edit').locator('svg');
    }
    async clickAdd() : Promise<WebTablePageForm> {
        await this.addButton.click();
        return new WebTablePageForm(this.page)
    }
    async clickEdit(row: number) : Promise<WebTablePageForm> {
        await this.editButtonRetriever(row).click();
        return new WebTablePageForm(this.page);
    }
    async verifyPerson(row: number, person: Person){
        await this.verifyPersonFirstName(row, person.firstName);
        await this.verifyPersonLastName(row, person.lastName);
        await this.verifyPersonEmail(row, person.email);
        await this.verifyPersonAge(row, person.age);
        await this.verifyPersonSalary(row, person.salary);
        await this.verifyPersonDepartment(row, person.department);
    }
    async verifyPersonFirstName(row: number, firstName: string){
        await expect(this.firstNameRetriever(row)).toHaveText(firstName);
    }
    async verifyPersonLastName(row: number, lastName: string){
        await expect(this.lastNameRetriever(row)).toHaveText(lastName);
    }
    async verifyPersonAge(row: number, age: number){
        await expect(this.ageRetriever(row)).toHaveText(age.toString());
    }
    async verifyPersonEmail(row: number, email: string){
        await expect(this.emailRetriever(row)).toHaveText(email);
    }
    async verifyPersonSalary(row: number, salary: number){
        await expect(this.salaryRetriever(row)).toHaveText(salary.toString());
    }
    async verifyPersonDepartment(row: number, department: string){
        await expect(this.departmentRetriever(row)).toHaveText(department.toString());
    }




  
}