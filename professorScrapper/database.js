import { DB, mainCollection, ObjectId } from "./DB.js";

class Database {
	constructor() {}

	async getAllRecords() {
		return await DB.collection(mainCollection).find({}).toArray();
	}

	async insertArrayObject(data) {
		DB.collection("data").insertMany(data);
	}
}

export default Database;
