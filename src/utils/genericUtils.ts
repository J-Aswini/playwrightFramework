import { expect, Locator, Page } from "@playwright/test";


export class GenericUtils{
page:Page

constructor(page: Page){
    this.page= page
}

async elementVisibility(locator: Locator, timeout: number){
await locator.waitFor({state: 'visible', timeout: timeout})
}

async clickAction(locator:Locator){
    await locator.click()
}
async waitForAPIResponse(url: string, time: number){
await this.page.waitForResponse(response => response.url().includes(url)&& response.status() === 200, {timeout:time})
}

async elementVisible(locator: Locator){
    await expect(locator).toBeVisible()
}
}