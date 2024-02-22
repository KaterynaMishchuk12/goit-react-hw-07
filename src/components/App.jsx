import { ContactForm } from "./ContactForm/Contact.Form";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/operations";

export function App() {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length < 1 ? (
          ""
        ) : (
          <>
            <SearchBox />
            <ContactList />
          </>
        )}
        {loading && !error && <p>Loading...</p>}
      </div>
    </>
  );
}
