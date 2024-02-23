import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContact, selectFilter } from "../redux/selectors";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.list}>
        {searchedContacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.phone}
          />
        ))}
      </ul>
    </div>
  );
};
