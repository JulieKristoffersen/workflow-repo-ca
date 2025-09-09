import { test, expect } from '@playwright/test';

test.describe('Navigation to venue details', () => {
  test('Click first venue and check details heading', async ({ page }) => {
    await page.goto('/');

    const venueContainer = page.locator('#venue-container');
    await expect(venueContainer).not.toHaveText('Loading...');
    
    const firstVenue = venueContainer.locator('div').first(); 
    await firstVenue.click();

    const heading = page.locator('h1'); 
    await expect(heading).toHaveText(/Venue details/i);
  });
});
