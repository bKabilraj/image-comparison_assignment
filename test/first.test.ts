import { expect, test} from "@playwright/test";
test("open letcode and verify title", async ({ page }) =>{

    await page.goto("https://www.eight25media.com/");
    const title = await page.title();
    expect(title).toBe("EIGHT25MEDIA WEB DESIGN SAN FRANCISCO");

});
