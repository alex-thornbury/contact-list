import { deleteContact, editContact } from "../../../database";
import ContactMapper from "../../../mappers/contact.mapper";

export default function handler(req, res) {
  try {
    const {
      query: { id },
      body,
      method,
    } = req;
    switch (method) {
      case "DELETE":
        if (!id) res.status(400).send();
        deleteContact(id);
        break;
      case "PUT":
        if (!id) res.status(400).send();
        const contactEntity = ContactMapper.toEntity(id, body);
        editContact(contactEntity);
        break;
      default:
        res.status(400).send();
        break;
    }

    res.status(200).send();
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
