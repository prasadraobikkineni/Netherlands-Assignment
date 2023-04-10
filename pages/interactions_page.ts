import { Locator, Page } from "@playwright/test";
import { ProgressBarPage } from "./progress_bar_page";
import { TooltipPage } from "./tooltip_page";
import { DroppablePage } from "./droppable_page";

export class InteractionsPage{
    readonly page: Page;
    readonly droppableItem: Locator;
    constructor(page: Page){
        this.page = page;
        this.droppableItem = page.getByText('Droppable');
    }
    async goToDroppablePage() : Promise<DroppablePage> {
        await this.droppableItem.click()
        return new DroppablePage(this.page);
    }

}