import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getContact, getFilter } from "../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {searchedContacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};
