import DB, { mainCollection, dataCollection, ObjectId, mailWithData } from "./DB.js";

class Database {
	constructor() {}

	async getAllRecords() {
		return await DB.collection(mainCollection).find({}).toArray();
	}

	async getMainSingle() {
		let record = await DB.collection(dataCollection).aggregate([
			{
				$match: { status : 0}
			},
			{
				$sample: {
					size: 1
				}
			},
		]).toArray()

		if(record.length) {
			await DB.collection(dataCollection).updateOne({_id: record[0]._id, status: 0}, {$set: {status : 1}})
			return record[0]
		} else {
			return false
		}
	}

	async resetDataStatusAll() {
		let response = (await DB.collection(dataCollection).updateMany({}, {$set: {status : 0}})).modifiedCount;
		console.log(response)
	}

	async insertArrayObject(data) {
		DB.collection("data").insertMany(data);
	}

	async insertMailWithData(data) {
		return await DB.collection(mailWithData).insertOne(data)
	}
}

export default Database;
