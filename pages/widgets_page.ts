import { Locator, Page } from "@playwright/test";
import { ProgressBarPage } from "./progress_bar_page";
import { TooltipPage } from "./tooltip_page";

export class WidgetsPage{
    readonly page: Page;
    readonly progressBarItem: Locator;
    readonly tooltipItem: Locator;
    constructor(page: Page){
        this.page = page;
        this.progressBarItem = page.getByText('Progress Bar');
        this.tooltipItem = page.getByRole('listitem').filter({ hasText: 'Tool Tips' });
    }
    async goToProgressBarPage() : Promise<ProgressBarPage> {
        await this.progressBarItem.click()
        return new ProgressBarPage(this.page);
    }
    async goToTooltipPage() : Promise<TooltipPage> {
        await this.tooltipItem.click()
        return new TooltipPage(this.page);
    }
    

}