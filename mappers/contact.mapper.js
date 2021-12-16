import ContactEntity from "../entities/contact.entity";

export default class ContactMapper {
  static toStorage = (contactEntity) => {
    const { id, firstName, lastName, emailAddress, phoneNumber } =
      contactEntity;

    return {
      id: id,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
    };
  };

  static toDto = (contactEntity) => {
    const { id, firstName, lastName, emailAddress, phoneNumber } =
      contactEntity;

    return {
      id,
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
    };
  };

  static toEntity = (id, rawData) => {
    return ContactEntity.create(id, rawData);
  };
}
