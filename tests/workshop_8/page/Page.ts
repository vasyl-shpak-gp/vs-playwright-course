import { Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';
import { Input } from './Input';
import { Button } from './Button'

export class PageObject extends AbstractPage{
    private button: Button;
    private input: Input;
    readonly firstNameInputSelector = '#firstName';
    readonly ageInputSelector = '#age';
    readonly isStudentCheckboxSelector = '#isStudent';
    readonly applyDataButttonSelector = '#applyData'
    
    readonly displayFirstName = '#displayFirstName'
    readonly displayAge = '#displayAge'
    readonly displayIsStudent = '#displayIsStudent'
    
    constructor(page: Page){
        super(page);
        this.button = new Button(page)
        this.input = new Input(page);
        }

    async open (url: string): Promise<void>{
        await this.page.goto(url);
    }

    async applyData(): Promise<void>{
        await this.button.clickButton(this.applyDataButttonSelector)
    }

     async fillFirstName (value: string): Promise<void>{
        await this.input.setInputValue(this.firstNameInputSelector, value)
    }

    async fillAge (value: string): Promise<void>{
        await this.input.setInputValue(this.ageInputSelector, value)
    }

    async checkIsStudent (): Promise<void>{
        await this.page.check(this.isStudentCheckboxSelector)
    }

    async text(selector: string): Promise<string | null>{
        const textContent = await this.page.textContent(selector);
        return textContent ?? null

    }

}