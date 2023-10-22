import {Page} from '@playwright/test'

export abstract class AbstractPage{
    protected page: Page

    constructor(page: Page){
        this.page = page
    }

    abstract open(url: string): Promise<void>

}