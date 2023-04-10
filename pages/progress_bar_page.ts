import { Locator, Page, expect } from "@playwright/test";
import Person from "../data/person";
import { WebTablePageForm } from "./web_tables_page_form";

export class ProgressBarPage{
    readonly page: Page;
    readonly startButton: Locator;
    readonly resetButton: Locator;
    readonly startProgressBarSelector: string;
    readonly completeProgressBarSelector: string;
    constructor(page: Page){
        this.page = page;
        this.startButton = page.getByRole('button', { name: 'Start' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.startProgressBarSelector = ".progress-bar.bg-info"
        this.completeProgressBarSelector = ".progress-bar.bg-success";

    }
    async clickStart() {
        await this.startButton.click();
    }
    async clickReset() {
        await this.resetButton.click();
    }
    async waitForProgressBarComplete(){
        await this.page.waitForSelector(this.completeProgressBarSelector);
    }
    async waitForProgressBarStart(){
        await this.page.waitForSelector(this.startProgressBarSelector);
    }



  
}