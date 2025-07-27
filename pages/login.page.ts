import { Locator, Page } from "playwright";

export class LoginPage {
    readonly page:Page
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

    constructor(page:Page){
        this.page=page
        this.emailInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async goTo(){
        await this.page.goto('/')
    }

    async login(username: string, password: string){
        await this.emailInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()  
    }
}