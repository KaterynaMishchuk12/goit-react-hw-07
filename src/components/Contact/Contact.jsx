import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../redux/operations";
import { useDispatch } from "react-redux";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = (contactId) => dispatch(deleteContact(contactId));

  return (
    <li key={id}>
      <div className={css.container}>
        <div className={css.contactInfo}>
          <p>
            <BiSolidUser className={css.icon} />
            {name}
          </p>
          <p>
            <BsFillTelephoneFill className={css.icon} />
            {number}
          </p>
        </div>
        <button type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
