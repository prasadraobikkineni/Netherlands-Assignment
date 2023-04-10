import { APIRequestContext, Locator, Page, expect } from "@playwright/test";

export class BrokenLinksPage{
    readonly page: Page;
    readonly brokenImage: Locator;
    constructor(page: Page){
        this.page = page;
        this.brokenImage = this.page.getByRole('img').nth(3);
    }
    async verifyBrokenImage(){
        const naturalWidth = await this.brokenImage.evaluate(e => (e as HTMLImageElement).naturalWidth);;
        expect(naturalWidth).toBeFalsy()
    }



  
}