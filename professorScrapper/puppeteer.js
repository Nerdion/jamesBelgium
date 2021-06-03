import puppeteer from "puppeteer-core";
const PUPPETEER_UI_FLAG = false;
import contstants from "./constants.js";
class Puppeteer {
	constructor() {
		this.BrowserPath = contstants.browserPath;
	}

	async launchBrowser() {
		this.browser = await puppeteer.launch({
			headless: PUPPETEER_UI_FLAG,
			executablePath: this.BrowserPath
		});
		this.page = await this.browser.newPage();
		await this.page.setViewport({ width: 1366, height: 768 });

		return { browser: this.browser, page: this.page };
	}

	async closeBrowser() {
		await this.page.close();
		this.page = null;
		await this.browser.close();
		this.browser = null;
	}
}

export default Puppeteer;
