import PropTypes from "prop-types";

import css from "./ContactList.module.css";

 const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
<li key={id} className={css.item}>
          <span>
            {name}:{phone}
          </span>
          <button onClick={() => onRemove(id)} className={css.btn}>
            Delete
          </button>
        </li>
  )
}

export const ContactList = ({ contacts, onRemove }) => {
  console.log(contacts.length);
  return (
    <ul>
      {contacts.map((contact) => <ContactListItem {...contact} onRemove={onRemove}/>)}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
