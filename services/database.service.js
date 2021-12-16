import { getNextID } from "../database";

export default class DatabaseService {
  static generateDatabaseID(rawData) {
    let { id } = rawData;

    if (!id) {
      id = getNextID();
    }

    return id;
  }
}
