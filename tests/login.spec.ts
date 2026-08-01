import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';

test.describe("login page tests", () => {

  let loginPage: LoginPage
  test.beforeEach("navigate to login url", async ({ page }) => {
    loginPage = new LoginPage(page)
    await page.goto(`${process.env.BASE_URL}/Login`);
  })

  test('login validation', async ({ page }) => {
    loginPage.login("info+programmanager@xlgclaims.com", 'Test1234!')
    loginPage.verifyLogo()
  });

})
