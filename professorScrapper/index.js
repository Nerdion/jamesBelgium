import Puppeteer from "./puppeteer.js";
import searchMails, {deleteAll} from './searchMails.js';
import searchGoogleScholar from './searchGoogleScholar.js';
let puppeteer = new Puppeteer();
async function main(whatToDo) {
	console.log("starting...");

	let { browser, page } = await puppeteer.launchBrowser();

	if(whatToDo === 'googleScholar') {
		await searchGoogleScholar(browser,page);
	} else if (whatToDo === 'mails') {
		await searchMails(browser,page)
	} else {
		console.log('Unkown conditions');
	}
}

main('mails').then(() => {
	console.log("ending...");
	deleteAll()
	//puppeteer.closeBrowser();
});
