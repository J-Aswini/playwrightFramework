import { test, expect } from '@playwright/test';

test('Verify mandatory field validation', async ({ page }) => {
  // Recording...
  await page.goto('https://testcms.reco-claims.ca/Login');
  await page.getByRole('textbox', { name: 'Username' }).fill('info+programmanager@xlgclaims.com');
await page.getByRole('textbox', { name: 'Username' }).fill('info+programmanager@xlgclaims.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('Test1234!');
await page.getByRole('button', { name: 'Login' }).click();
await page.getByText('Administrator').click();
await page.getByRole('link', { name: 'Users' }).click();
await page.getByRole('button', { name: 'add_circle_outline Add' }).click();
await page.getByRole('button', { name: 'save Save' }).click();
await expect(page.getByText('Email is required')).toBeVisible();
await expect(page.getByText('Name is required')).toBeVisible();
await expect(page.getByText('Password is required', { exact: true })).toBeVisible();
await expect(page.getByText('Confirm Password is required')).toBeVisible();
});