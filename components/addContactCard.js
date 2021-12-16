import { Button, TextField, Card, CardContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
import { useSWRConfig } from "swr";

const defaultFormValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
};

const AddContactCard = ({ contact, hoistCancelEvent }) => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [submitButtonTitle, setSubmitButtonTitle] = useState("ADD CONTACT");
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (contact) {
      setFormValues({
        firstName: contact.firstName,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
        emailAddress: contact.emailAddress,
      });
      setSubmitButtonTitle("SAVE CHANGES");
    } else {
      setFormValues(defaultFormValues);
    }
  }, [defaultFormValues, contact]);

  const postSubmit = () => {
    if (hoistCancelEvent) {
      hoistCancelEvent();
    }
    setFormValues({ ...defaultFormValues });
    setSubmitButtonTitle("ADD CONTACT");
  };

  const handleAdd = async () => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      await mutate("/api/contacts");
      postSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async () => {
    try {
      await fetch(`/api/contact/${contact.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      await mutate("/api/contacts");
      postSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (contact) {
      await handleEdit();
    } else {
      await handleAdd();
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCancel = () => {
    hoistCancelEvent();
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <TextField
          size="small"
          id="first-name"
          label="First Name"
          name="firstName"
          variant="outlined"
          onChange={handleInput}
          value={formValues.firstName}
        />
        <TextField
          size="small"
          id="last-name"
          label="Last Name"
          name="lastName"
          variant="outlined"
          onChange={handleInput}
          value={formValues.lastName}
        />
        <TextField
          size="small"
          id="email"
          label="Email Address"
          name="emailAddress"
          variant="outlined"
          onChange={handleInput}
          value={formValues.emailAddress}
        />
        <TextField
          size="small"
          id="phone"
          label="Phone Number"
          name="phoneNumber"
          variant="outlined"
          onChange={handleInput}
          value={formValues.phoneNumber}
        />
        <Button type="submit" onClick={handleSubmit}>
          {submitButtonTitle}
        </Button>
        {hoistCancelEvent && <Button onClick={handleCancel}>CANCEL</Button>}
      </CardContent>
    </Card>
  );
};

export default AddContactCard;
