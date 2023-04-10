import { Locator, Page, expect } from "@playwright/test";

export class DroppablePage{
    readonly page: Page;
    readonly dragMe: Locator;
    readonly dragPanel: Locator;
    readonly draggedCaption: Locator;
    constructor(page: Page){
        this.page = page;
        this.dragMe = page.getByText('Drag me', { exact: true });
        this.dragPanel = page.getByRole('tabpanel', { name: 'Simple' }).locator('#droppable');
        this.draggedCaption = this.page.getByText('Dropped!');
    }
    async dragToPanel() {
        await this.dragMe.dragTo(this.dragPanel, {force: true});
    }
    async verifyDragged(){
        await this.draggedCaption.isVisible()
    }


  
}