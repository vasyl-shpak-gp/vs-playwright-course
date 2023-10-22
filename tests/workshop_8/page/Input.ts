import {Page} from '@playwright/test'

export class Input {
    private page: Page;

    constructor(page: Page){
        this.page = page       
    }
    
    async setInputValue(selector: string, value: string): Promise<void>{
        await this.page.fill(selector, value);
    }

}