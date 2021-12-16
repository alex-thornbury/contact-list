import { contacts } from "../../database";
import ContactMapper from "../../mappers/contact.mapper";

export default function handler(req, res) {
  try {
    const contactEntities = contacts.map((contact) => {
      return ContactMapper.toEntity(contact.id, contact);
    });
    const contactDtos = contactEntities.map((contact) =>
      ContactMapper.toDto(contact)
    );
    res.status(200).json(contactDtos);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
