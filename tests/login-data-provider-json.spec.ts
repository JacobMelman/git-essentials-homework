import { test, expect } from '@playwright/test';
import loginData from '../test-data/login.json';
import { LoginPage } from '../pages/LoginPage';

for (const loginCase of loginData.cases) {
  test(`login from JSON: ${loginCase.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginCase.email, loginCase.password);

    if (loginCase.expectedResult === 'success') {
      await expect(page).toHaveURL(/\/account(?:[/?#]|$)/);
      await expect(page.getByRole('heading', {
        name: 'My account', exact: true,
      })).toBeVisible();
    } else {
      await expect(page.getByText('Invalid email or password', {
        exact: true,
      })).toBeVisible();
    }
  });
}
