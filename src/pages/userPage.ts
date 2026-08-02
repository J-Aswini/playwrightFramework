import { expect, Locator, Page } from "@playwright/test"
import { CommonPage } from '../pages/basePage'

export class UsersPage extends CommonPage {

    page: Page
readonly saveButton: Locator
readonly addButton: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.saveButton = page.getByRole('button', { name: 'save Save' })
        this.addButton = page.getByRole('button', { name: 'add_circle_outline Add' })
    }

    async add(){
await this.addButton.click()
    }

    async clickSaveButton(){
await this.saveButton.click()
    }

    async verifyErrorMessage() {
        await expect(this.page.getByText('Email is required')).toBeVisible();
        await expect(this.page.getByText('Name is required')).toBeVisible();
        await expect(this.page.getByText('Password is required', { exact: true })).toBeVisible();
        await expect(this.page.getByText('Confirm Password is required')).toBeVisible();
    }
}
