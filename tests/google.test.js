const { expect, test } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.google.com')
})

test('Check we are on google', async ({ page }) => {
  expect(await page.title()).toBe('Google')
})