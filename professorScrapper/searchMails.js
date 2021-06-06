
import Database from "./database.js";
import stringSimilarity from 'string-similarity';
let database = new Database();

const searchMails = async (browser,page) => {
  try {
    let dataRecord = true;
    while(dataRecord) {
      dataRecord = await database.getMainSingle();
      await page.goto(`https://duckduckgo.com/?q=${dataRecord.userName} ${dataRecord.university}&ia=web`, {
				waitUntil: "networkidle2"
			});
      await page.waitForSelector('.result--more__btn');
      await page.waitForTimeout(4500);
      await page.click('.result--more__btn');
      await page.waitForTimeout(4000);

      await page.waitForSelector('#links');
      let textChunk = await page.$eval('#links', (element) => element.textContent);

      const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm;
      let allMatchedMails = await textChunk.matchAll(regex);

      let matchedMails = []
      for (const match of allMatchedMails) {
        matchedMails.push(match[0]);
      }

      if(matchedMails.length > 0) {
        var matches = stringSimilarity.findBestMatch(dataRecord.userName, matchedMails);
        console.log(`\n Found for`)
        console.log({mail: matches.bestMatch.target, name: dataRecord.userName, site: dataRecord.university});
        dataRecord['mail'] = matches.bestMatch.target;
        dataRecord['otherMatches'] = matches.ratings;
        dataRecord['mailFound'] = true;

        await database.insertMailWithData(dataRecord);
      } else {
        dataRecord['mailFound'] = false;
        dataRecord['mail'] = '';
        dataRecord['otherMatches'] = [];
        console.warn(`\n Not Found for`);
        console.warn({name: dataRecord.userName, site: dataRecord.university});
      }

      delete dataRecord._id
      delete dataRecord.status
      await database.insertMailWithData(dataRecord);
    }
  } catch (error) {
    console.log({error});
  }
}

const deleteAll = async () => {
  let record = await database.resetDataStatusAll();
}

export default searchMails
export {deleteAll}