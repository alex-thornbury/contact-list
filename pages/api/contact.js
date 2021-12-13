import { addContact, createContact } from "../../database";

export default function handler(req, res) {
  const { body } = req;
  console.log("REQ BODY", body);
  addContact(createContact(body));
  res.status(204).send();
}
