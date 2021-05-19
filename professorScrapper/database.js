import { DB, mainCollection, ObjectId } from "./DB.js";

class Database {
	constructor() {}

	async getAllRecords() {
		let response = await DB.collection(mainCollection).find({}).toArray();
		return response;
	}

	async insertArrayObject(data) {
		DB.collection("data").insertMany(data);
	}
}

export default Database;
