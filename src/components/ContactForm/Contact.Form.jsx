import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/operations";
import { selectContact } from "../redux/selectors";

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

  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const alreadyExists = contacts.some((contact) => contact.name === name);
    if (alreadyExists) {
      alert(`${name} already exists!`);
    } else {
      dispatch(addContact({ name, phone: number }));
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
