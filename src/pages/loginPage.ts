import {expect, Locator, Page} from "@playwright/test"


export class LoginPage{
    page: Page
    userName: Locator
    password: Locator
    submit: Locator
    // profileIcon: Locator
    // baseurl: string
    // userNameValue: string
    // passwordValue: string
    constructor(page:Page){
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submit = page.getByRole('button', { name: 'Login' })

    }
    async login(email: string, password:string){
        await this.userName.fill(email)
        await this.password.fill(password)
        await this.submit.click()
    }
}