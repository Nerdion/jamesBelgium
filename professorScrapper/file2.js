import Puppeteer from "./puppeteer.js";
import Database from "./database.js";
let puppeteer = new Puppeteer();
async function main() {
	console.log("starting...");

	let { browser, page } = await puppeteer.launchBrowser();

	console.log(browser.targets());
}

main().then(() => {
	console.log("ending...");
	puppeteer.closeBrowser();
});
