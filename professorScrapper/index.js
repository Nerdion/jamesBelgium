import Puppeteer from "./puppeteer.js";
import Database from "./database.js";
let puppeteer = new Puppeteer();
async function main() {
	console.log("starting...");

	let { browser, page } = await puppeteer.launchBrowser();

	let database = new Database();
	let allRecords = await database.getAllRecords();

	for (let i = 0; i < allRecords.length; i++) {
		try {
			await page.goto(allRecords[i].Link, {
				waitUntil: "networkidle2"
			});
			let stepCount = 0;
			let shouldNotEval = false;
			do {
				await page.waitForTimeout(1000);
				await page.waitForSelector(".gs_ai_name a", { timeout: 8000 });
				let getArrayOfElementHandle = await page.$$(".gs_ai_t");
				let data = getArrayOfElementHandle.map(async (elementHandle, index) => {
					let userName = elementHandle.$eval(".gs_ai_name a", (e) => e.textContent);
					let url = elementHandle.$eval(".gs_ai_name a", (e) => e.href);
					let sectors = elementHandle.$$eval(".gs_ai_int a", (sectorNames) =>
						sectorNames.map((each) => each.textContent)
					);
					let university = elementHandle.$eval('.gs_ai_eml', (universityText) => {
						return universityText.textContent.split('correo verificada de ')[1]
					})
					let citadoPor = elementHandle.$eval('.gs_ai_cby', (citaction) => {
						return citaction.textContent.split('por ')[1]
					})
					return await Promise.all([userName, sectors, url, university, citadoPor]);
				});

				let information = await Promise.all(data);
				await page.waitForTimeout(1000);
				let finalDataOnPage = information.map((informationOfIndex) => {
					return {
						userName: informationOfIndex[0],
						sectors: informationOfIndex[1],
						link: informationOfIndex[2],
						university: informationOfIndex[3],
						citationCount : informationOfIndex[4]
					};
				});
				await database.insertArrayObject(finalDataOnPage);
				console.log({record : allRecords[i].Index, page : stepCount})
				shouldNotEval = await page.$eval(
					'#gsc_authors_bottom_pag button[aria-label="Siguiente"]',
					el=> el.hasAttribute('disabled')
				)
				if(!shouldNotEval) {
					await page.click('[aria-label="Siguiente"]');
					stepCount++;
				}
			} while (!shouldNotEval);
		} catch (e) {
			console.log(e.toString(), " moving ahead ...");
		}
	}
}

main().then(() => {
	console.log("ending...");
	puppeteer.closeBrowser();
});
