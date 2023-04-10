import { Locator, Page } from "@playwright/test";
import { WebTablePage } from "./web_tables_page";
import { BrokenLinksPage } from "./broken_links_page";
import { PracticeFormPage } from "./practice_form_page";

export class FormsPage{
    readonly page: Page;
    readonly praacticeFormItem: Locator;
    constructor(page: Page){
        this.page = page;
        this.praacticeFormItem = page.getByText('Practice Form');
    }
    async goToPracticeFormPage() : Promise<PracticeFormPage> {
        await this.praacticeFormItem.click()
        return new PracticeFormPage(this.page);
    }
}