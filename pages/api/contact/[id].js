import { deleteContact } from "../../../database";

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "DELETE":
      deleteContact(id);
  }

  res.status(200).send();
}
