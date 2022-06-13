import { connectionDB, getCollection } from "../database/index";

class UserRepository {
  async createUser(name: String, number: Number) {
    await connectionDB();
    const collection = await getCollection("keep", "users");

    const userCreated = await collection.insert({ name, number });

    return userCreated;
  }
}

export { UserRepository };
