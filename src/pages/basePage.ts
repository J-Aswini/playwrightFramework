import { Page } from '@playwright/test'
import { GenericUtils } from '../utils/genericUtils'

export class CommonPage extends GenericUtils {
    page: Page
    constructor(page: Page) {
        super(page)
        this.page = page
    }


    async navigateViaDashBoard(parentMenu: string, clildMenu?: string) {
        await this.page.getByText(parentMenu).waitFor({ state: 'visible', timeout: 60000 })
        await this.page.getByText(parentMenu).click()
        if (clildMenu) {
            await this.page.getByRole('link', { name: clildMenu }).waitFor({ state: 'visible', timeout: 60000 })
            await this.page.getByRole('link', { name: clildMenu }).click()
        }
    }
    async randomNumberGenerator() {
        const randomNum = await Math.floor(Math.random() * 10000)
        return randomNum
    }
}