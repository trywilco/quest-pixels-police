/* eslint-disable */
const puppeteer = require("puppeteer");

describe("Check that the search box is shown only after clicking get", () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await page.close();
        await browser.close();
    });

    it("loads items", async () => {
        await page.goto("http://localhost:3001", {
            waitUntil: "load",
            timeout: 60000,
        });
        page.on("console", (log) => console.log(log.text()));


        const cards = await page.$(".card");
        console.log('>>> cards')

        expect(cards).toBeDefined();

        //TODO - click on first card, fetch components by ids, and check they match the design

    }, 60000);
});