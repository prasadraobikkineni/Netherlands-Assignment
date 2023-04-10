import { Locator, Page } from "@playwright/test";
import { WebTablePage } from "./web_tables_page";
import { BrokenLinksPage } from "./broken_links_page";

export class ElementsPage{
    readonly page: Page;
    readonly webTablesItem: Locator;
    readonly brokenLinksItem: Locator;
    constructor(page: Page){
        this.page = page;
        this.webTablesItem = page.getByRole('listitem').filter({ hasText: 'Web Tables' });
        this.brokenLinksItem = page.getByRole('listitem').filter({ hasText: 'Broken Links - Images' });
    }
    async goToWebTablesPage() : Promise<WebTablePage> {
        await this.webTablesItem.click()
        return new WebTablePage(this.page);
    }
    async goToBrokenLinksPage() : Promise<BrokenLinksPage> {
        await this.brokenLinksItem.click()
        return new BrokenLinksPage(this.page);
    }

}