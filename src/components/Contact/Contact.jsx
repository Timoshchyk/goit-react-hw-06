import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

function Contact({ item: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.row}>
        <BsFillPersonFill className={css.icon} />
        <p>{name}</p>
      </div>
      <div className={css.row}>
        <BsFillTelephoneFill className={css.icon} />
        <p>{number}</p>
      </div>
      <button type="button" onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </>
  );
}

export default Contact;
