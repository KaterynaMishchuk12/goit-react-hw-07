import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { getContact } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(15, "Too long!")
    .required("Please, fill in the number"),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();
  console.log(contacts);

  const handleSubmit = (values, { resetForm }) => {
    const alreadyExists = contacts.some(
      (contact) => contact.name === values.name
    );

    if (alreadyExists) {
      alert(`${values.name} already exists!`);
    } else {
      const newContact = {
        ...values,
        id: nanoid(),
      };
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="text" name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
