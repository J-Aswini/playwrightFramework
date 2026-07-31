import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';

test.describe("login page tests", () => {

  let loginPage: LoginPage
  test.beforeEach("navigate to login url", async ({ page }) => {
    await page.goto('https://testcms.reco-claims.ca/Login');
  })

  test('login validation', async ({ page }) => {
    loginPage = new LoginPage(page)
    loginPage.login("info+programmanager@xlgclaims.com", 'Test1234!')
    await expect(page.getByText('RECO CMS', { exact: true })).toBeVisible();
    // Expect a title "to contain" a substring.
  });

})
