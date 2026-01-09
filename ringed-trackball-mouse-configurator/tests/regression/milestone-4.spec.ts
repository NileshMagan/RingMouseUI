import { test, expect } from '@playwright/test';

test.describe('Milestone 4 UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/hud.html');
  });

  test('should display the "Top Label Strip" component', async ({ page }) => {
    await expect(page.locator('.top-label-strip')).toBeVisible();
    await expect(page.getByText('DEFAULT')).toBeVisible();
    await expect(page.getByText('...')).toBeVisible();
  });

  test('should display the "Skeleton Ball" component', async ({ page }) => {
    await expect(page.locator('.skeleton-ball')).toBeVisible();
  });
});
