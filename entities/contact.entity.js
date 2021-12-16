export default class ContactEntity {
  _props;

  constructor(props) {
    this._props = props;
  }

  get id() {
    return Number(this._props.id);
  }

  get firstName() {
    return this._props.firstName;
  }

  get lastName() {
    return this._props.lastName;
  }

  get phoneNumber() {
    return this._props.phoneNumber;
  }

  get emailAddress() {
    return this._props.emailAddress;
  }

  static create(id, contact) {
    const { firstName, lastName, phoneNumber, emailAddress } = contact;
    if (Number(id) && firstName && lastName && phoneNumber && emailAddress) {
      const props = {
        id,
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
      };
      return new ContactEntity(props);
    } else {
      throw new Error("Missing require property!");
    }
  }
}
