import { test, expect } from '@playwright/test';

test('take screenshot', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'test-results/screenshot.png' });
});
