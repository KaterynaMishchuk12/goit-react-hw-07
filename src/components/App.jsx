import { ContactForm } from "./ContactForm/Contact.Form";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import "./App.css";

export function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
