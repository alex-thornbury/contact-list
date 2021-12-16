import { addContact } from "../../database";
import ContactMapper from "../../mappers/contact.mapper";
import DatabaseService from "../../services/database.service";

export default function handler(req, res) {
  try {
    const { body } = req;
    const id = DatabaseService.generateDatabaseID(body);
    const entity = ContactMapper.toEntity(id, body);
    addContact(ContactMapper.toStorage(entity));
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}
