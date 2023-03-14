//Svelte added testing for minimum test codes for frontend
// Playwright is used mostly end to end in UI/UX testing

import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Flowbite Svelte');
});