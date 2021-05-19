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
			await page.goto("https://scholar.google.com/citations?view_op=view_org", {
				waitUntil: "networkidle2"
			});
			await page.waitForSelector('[name="mauthors"]', { timeout: 5000 });
			await page.type('[name="mauthors"]', allRecords[i].universityNames);
			await page.click('[name="btnG"]');
			//info.name =
			//single page
			await page.waitForSelector(".gs_nph.gsc_pgn_ppn");
			let countWithDash = await page.$eval(".gs_nph.gsc_pgn_ppn", (e) => e.textContent);
			let count = countWithDash.split(" - ");
			let stepsToPaginate = parseInt(count[1]) / 10;
			stepsToPaginate += stepsToPaginate;

			console.log(`<--- ${stepsToPaginate} steps to paginate --->`);
			let stepCount = 0;

			do {
				await page.waitForTimeout(1500);
				await page.waitForSelector(".gs_ai_name a", { timeout: 8000 });
				let getArrayOfElementHandle = await page.$$(".gs_ai_t");
				let data = getArrayOfElementHandle.map(async (elementHandle, index) => {
					let userName = elementHandle.$eval(".gs_ai_name a", (e) => e.textContent);
					let url = elementHandle.$eval(".gs_ai_name a", (e) => e.href);
					let universitySite = elementHandle.$eval(".gs_ai_eml", (e) =>
						e.innerText ? e.innerText.split("at ")[1] : null
					);
					let sectors = elementHandle.$$eval(".gs_ai_int a", (sectorNames) =>
						sectorNames.map((each) => each.textContent)
					);
					return await Promise.all([userName, universitySite, sectors, url]);
				});

				let information = await Promise.all(data);
				await page.waitForTimeout(1500);
				let finalDataOnPage = await information.map((informationOfIndex) => {
					return {
						userName: informationOfIndex[0],
						universitySite: informationOfIndex[1],
						sectors: informationOfIndex[2],
						link: informationOfIndex[3]
					};
				});
				console.log(`<-- Found ${finalDataOnPage.length} on page ${stepCount} -->`);
				await database.insertArrayObject(finalDataOnPage);
				stepCount++;
				await page.click('[aria-label="Next"]');
			} while (stepCount <= stepsToPaginate);
		} catch (e) {
			console.log(e.toString(), " moving ahead ...");
		}
	}
}

main().then(() => {
	console.log("ending...");
	puppeteer.closeBrowser();
});
