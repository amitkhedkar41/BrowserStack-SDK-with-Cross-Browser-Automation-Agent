import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Navigate to the application
    await page.goto('https://wanderstack.vercel.app/');
    
    // Click the Login 
    await page.getByRole('button', { name: 'Login' }).click();
    
    // Fill in email field
    await page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('amit@gmail.com');
    
    // Fill in password field
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('NewPass@321');
    
    // Submit login form
    await page.getByLabel('Sign In').getByRole('button', { name: 'Login' }).click();
    
    // Wait for page to load
    await page.waitForTimeout(10000);
    
    // Verify user is logged in by checking for user name
    await expect(page.locator('h1')).toContainText('Amit K');
    
    // Open user menu
    await page.getByRole('button', { name: 'AK Amit K' }).click();
    
    // Click logout button
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    
    // Verify user is logged out by checking for home page title
    await expect(page.locator('h1')).toContainText('Discover Your Perfect Getaway');
});