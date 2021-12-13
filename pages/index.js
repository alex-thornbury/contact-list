import { Container, Typography } from "@material-ui/core";
import ContactList from "../components/contactList";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Container className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Contacts
      </Typography>
      <ContactList />
    </Container>
  );
}
