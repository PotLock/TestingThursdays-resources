import { test, expect } from '@playwright/test';

test('landing page visual baseline', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot('landing-page.png', { fullPage: true });
});
