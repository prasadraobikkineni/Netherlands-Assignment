import { Locator, Page } from "@playwright/test";
import { ElementsPage } from "./elements_page";
import { WidgetsPage } from "./widgets_page";
import { InteractionsPage } from "./interactions_page";
import { FormsPage } from "./forms_page";

export class HomePage{
    readonly page: Page;
    readonly elementsSection: Locator;
    readonly widgetsSection: Locator;
    readonly interactionsSection: Locator
    readonly formsSection: Locator

    readonly baseURL: string


    constructor(page: Page){
        this.page = page;
        this.baseURL = "https://demoqa.com"
        this.elementsSection = page.getByRole('heading', { name: 'Elements' });
        this.widgetsSection = page.getByRole('heading', { name: 'Widgets' });
        this.interactionsSection = page.getByRole('heading', { name: 'Interactions' });
        this.formsSection = page.getByRole('heading', { name: 'Forms' });
        

    }
    async open(){
       await this.page.goto(this.baseURL);
    }
    async goToElementsPage() : Promise<ElementsPage>{
        await this.elementsSection.click();
        return new ElementsPage(this.page);
    }
    async goToWidgetsPage() : Promise<WidgetsPage>{
        await this.widgetsSection.click();
        return new WidgetsPage(this.page);
    }
    async goToInteractionsPage() : Promise<InteractionsPage>{
        await this.interactionsSection.click();
        return new InteractionsPage(this.page);
    }
    async goToFormsPage() : Promise<FormsPage>{
        await this.formsSection.click();
        return new FormsPage(this.page);
    }
    

}