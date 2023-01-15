import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {

    use: {
        headless: false,
        channel: "chrome",
        screenshot: "off",
        video: "off"
    },
testMatch: ["image.test.ts"],
retries: 0,
reporter: [["dot"], ["json", { outputFile: "test-result.json"}]]

}
export default config;