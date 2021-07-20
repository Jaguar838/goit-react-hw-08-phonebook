import PropTypes from "prop-types";

import css from "./ContactList.module.css";

 const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
<li className={css.item}>
          <span>
            {name}:{phone}
          </span>
          <button className={css.btn} onClick={() => onRemove(id)} >
            Delete
          </button>
        </li>
  )
}

export const ContactList = ({ contacts, onRemove }) => {
  console.log(contacts.length);
  return (
    <ul>
      {contacts.map((contact) => <ContactListItem key={contact.id} {...contact} onRemove={onRemove}/>)}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
