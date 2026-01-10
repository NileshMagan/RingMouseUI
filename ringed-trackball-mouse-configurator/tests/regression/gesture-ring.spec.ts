import { test, expect } from '@playwright/test';

test.describe('GestureRing', () => {
  test('should render on the HUD page', async ({ page }) => {
    await page.goto('/hud.html');

    // Check that the GestureRing component's main div is visible
    const gestureRing = page.locator('.gesture-ring');
    await expect(gestureRing).toBeVisible();
  });

  const animations = [
    'swipe-up',
    'swipe-down',
    'swipe-left',
    'swipe-right',
    'click',
    'hold',
    'keyboard-cycle',
  ];

  for (const anim of animations) {
    test(`should display the ${anim} animation`, async ({ page }) => {
      await page.goto('/hud.html');

      // Click the button to trigger the animation
      await page.getByRole('button', { name: anim }).click();

      // Check that the gesture indicator has the correct animation class
      const gestureIndicator = page.locator(`.gesture-indicator.${anim}`);
      await expect(gestureIndicator).toBeVisible();
    });
  }
});
