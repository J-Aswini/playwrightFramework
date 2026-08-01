import { expect, Locator, Page } from "@playwright/test"
import { CommonPage } from '../pages/basePage'

export class RolePage extends CommonPage {

    page: Page
    readonly inputBox: Locator
    readonly saveButton: Locator
    readonly cancelButton: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.inputBox = page.locator('input[name="Name"]')
        this.saveButton = page.getByRole('button', { name: 'save Save' })
        this.cancelButton = page.getByRole('button', { name: 'Cancel' })
    }


    async createNewRole() {
        const num = await this.randomNumberGenerator()
        await this.inputBox.fill(`Test${num}`)
        await this.saveButton.click()
    }

    async verifyAddApplication() {
        await this.elementVisibility(this.page.getByRole('link', { name: 'Roles' }), 60000)
        await expect(this.page.getByRole('heading', { name: 'Roles' })).toBeVisible()
        await this.page.getByRole('button', { name: 'add_circle_outline Add' }).click();
        await expect(this.page.getByText('Add Application Role')).toBeVisible();
        await expect(this.cancelButton).toBeVisible();
        await expect(this.saveButton).toBeVisible();
    }
}