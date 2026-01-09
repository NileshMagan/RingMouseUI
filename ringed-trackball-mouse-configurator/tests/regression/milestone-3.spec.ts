import { test, expect } from '@playwright/test';

test.describe('Milestone 3 UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the "Gesture Mapping" section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Gesture Mapping' })).toBeVisible();
  });

  test('should display the "Keyboard Mode Editor" section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Keyboard Mode Editor' })).toBeVisible();
  });

  test('should display the "HUD Settings" section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'HUD Settings' })).toBeVisible();
  });
});
