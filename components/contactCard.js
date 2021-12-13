import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "../styles/card.module.css";
import { useSWRConfig } from "swr";

const ContactCard = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { firstName, lastName, emailAddress, phoneNumber } = contact;
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    try {
      await fetch(`/api/contact/${contact.id}`, {
        method: "DELETE",
      });
      mutate("/api/contacts");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    alert("EDIT");
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h3">{`${firstName} ${lastName}`}</Typography>
        <Typography>{`Email: ${emailAddress}`}</Typography>
        <Typography>{`Phone: ${phoneNumber}`}</Typography>
        <ButtonGroup>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
