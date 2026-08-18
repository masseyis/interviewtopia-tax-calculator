import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('the starter page loads without automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Interviewtopia Tax Calculator',
    }),
  ).toBeVisible()

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScanResults.violations).toEqual([])
})
