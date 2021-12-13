import { Button, TextField, Card, CardContent } from "@material-ui/core";
import React, { useState } from "react";
import styles from "../styles/card.module.css";
import { useSWRConfig } from "swr";

const defaultFormValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
};

const AddContactCard = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { mutate } = useSWRConfig();

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
      setFormValues({ ...defaultFormValues });
      console.log(formValues);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
        <Button type="submit" onClick={handleAdd}>
          ADD NEW CONTACT
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddContactCard;
