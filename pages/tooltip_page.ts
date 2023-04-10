import { Locator, Page, expect } from "@playwright/test";

export class TooltipPage{
    readonly page: Page;
    readonly tooltipButton: Locator;
    readonly tooltipSelector: string;
    constructor(page: Page){
        this.page = page;
        this.tooltipButton = page.getByRole('button', { name: 'Hover me to see' });
        this.tooltipSelector = ".tooltip"
    }
    async hoverTooltipButton() {
        await this.tooltipButton.hover();
    }
    async waitForTooltipToShow(){
        await this.page.waitForSelector(this.tooltipSelector);
    }
    async verifyTooltipText(text: string){
        const tooltip = this.page.locator(this.tooltipSelector);
        await expect(tooltip).toHaveText(text);
    }



  
}