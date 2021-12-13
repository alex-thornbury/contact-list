import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddContactCard from "./addContactCard";
import ContactCard from "./contactCard";
import useSwr from "swr";
import styles from "../styles/cardList.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const { data, error } = useSwr("/api/contacts", fetcher);

  useEffect(() => {
    setContacts(data || []);
  }, [data]);

  return (
    <Grid container spacing={2} className={styles.container}>
      {contacts.map((contact, index) => {
        return (
          <Grid item key={index}>
            <ContactCard contact={contact} />
          </Grid>
        );
      })}
      <Grid item>
        <AddContactCard />
      </Grid>
      ;
    </Grid>
  );
};

export default ContactList;
