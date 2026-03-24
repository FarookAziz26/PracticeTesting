const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const testData = require('../../utils/testData');

test.describe('Login Tests for practice - SauceDemo', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    // TEST 1: Valid login
    test('should login with valid credentials', async ({ page }) => {
        await loginPage.login(
            testData.validUser.username,
            testData.validUser.password
        );

        await expect(page).toHaveURL(/inventory/);
        console.log('Providing valid Login credentials works well!');
    });

    // TEST 2: Locked out user 
    test('should show error for Locked out user', async ({ page }) => {
        await loginPage.login(
            testData.lockedUser.username,
            testData.lockedUser.password
        );

        await expect(page.locator('[data-test="error"]')).toBeVisible();
        console.log('The Locked out error message shows correctly!');
    });

    // TEST 3: Empty fields
    test('Should show error for empty credentials', async ({ page }) => {
        await loginPage.login('', '');

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();

        console.log('Empty field validation works!');
    });
});