import ContactMapper from "./mappers/contact.mapper";

export let contacts = [];

export const getNextID = () => {
  return contacts.length + 1;
};

export const addContact = (contact) => {
  contacts.push(contact);
};

export const editContact = (contact) => {
  const index = contacts.findIndex((c) => c.id === contact.id);
  if (index < 0) {
    throw new Error("Not Found!");
  }
  contacts[index] = ContactMapper.toStorage(contact);
};

export const deleteContact = (id) => {
  contacts = contacts.filter((c) => String(c.id) !== String(id));
};
