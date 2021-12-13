export let contacts = [
  {
    id: 0,
    firstName: "Alex",
    lastName: "Test",
    emailAddress: "test",
    phoneNumber: "test",
  },
  {
    id: 1,
    firstName: "Alex",
    lastName: "Test",
    emailAddress: "test",
    phoneNumber: "test",
  },
  {
    id: 2,
    firstName: "Alex",
    lastName: "Test",
    emailAddress: "test",
    phoneNumber: "test",
  },
];

export const createContact = ({
  id,
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
}) => {
  return {
    id: Number(id) || Number(contacts.length),
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
  };
};

export const addContact = (contact) => {
  console.log("DB ADD CONTACT", contact);
  contacts.push(contact);
};

export const editContact = (id, payload) => {
  const index = contacts.findIndex((c) => c.id === id);
  contacts[index] = createContact({ id, ...payload });
};

export const deleteContact = (id) => {
  contacts = contacts.filter((c) => String(c.id) !== String(id));
};
