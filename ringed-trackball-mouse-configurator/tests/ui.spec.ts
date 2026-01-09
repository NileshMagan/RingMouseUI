import { test, expect } from '@playwright/test';

test.describe('UI Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the "Device" section with all its elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Device' })).toBeVisible();
    await expect(page.getByText('Status:')).toBeVisible();
    await expect(page.getByText('Battery:')).toBeVisible();
    await expect(page.getByText('Firmware:')).toBeVisible();
    await expect(page.getByText('Active Layer:')).toBeVisible();
    await expect(page.getByText('Signal Strength:')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Disconnect' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Force Resync' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Identify Device' })).toBeVisible();
  });

  test('should display the "Layer Editor" section with all its elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Layers' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create New Layer' })).toBeVisible();
  });

  test('should create a new layer when the "Create New Layer" button is clicked', async ({ page }) => {
    await page.getByRole('button', { name: 'Create New Layer' }).click();
    await expect(page.locator('li:has-text("Layer 1")')).toBeVisible();
    await expect(page.getByLabel('Name')).toHaveValue('Layer 1');
    await expect(page.getByLabel('Color')).toBeVisible();
  });
});
