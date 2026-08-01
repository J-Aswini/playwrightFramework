import {expect, Locator, Page} from "@playwright/test"


export class LoginPage{
    page: Page
    userName: Locator
    password: Locator
    submit: Locator
    logo: Locator
    // profileIcon: Locator
    // baseurl: string
    // userNameValue: string
    // passwordValue: string
    constructor(page:Page){
        this.page = page
        this.userName = page.getByRole('textbox', { name: 'Username' })
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.submit = page.getByRole('button', { name: 'Login' })
        this.logo = page.locator('.rz-gravatar')

    }
    async login(email: string, password:string){
        await this.userName.fill(email)
        await this.password.fill(password)
        await this.submit.click()
    }

    async verifyLogo(){
         await this.logo.waitFor({ state: 'visible' });
         await expect(this.logo).toBeVisible();
    }

    async adminLogin(){
    await this.page.goto(`${process.env.BASE_URL}/Login`);
    await this.login(process.env.USER_EMAIL!, process.env.USER_PASSWORD!)
    await this.verifyLogo()
    }
}