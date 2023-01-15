import { expect, test } from "@playwright/test";

test("image comparsion", async ({ page}) => {
    await page.goto("https://www.eight25media.com/");

    expect(await page.screenshot({
        fullPage: true
    })).toMatchSnapshot("eight25mediaa.png")


})

// test('example test', async ({ page }) => {
//     await page.goto('https://playwright.dev');
//     expect(await page.screenshot()).toMatchSnapshot('snapshot-name.png');
//   });