import {test as baseTest, Page} from  '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { loginFixture } from '../types/types'

export const test = baseTest.extend<loginFixture>({
    pageWithLogin: async({page}, use)=>{
        const loginPage = new LoginPage(page)
        await loginPage.adminLogin()
        await use(page)
    }
})