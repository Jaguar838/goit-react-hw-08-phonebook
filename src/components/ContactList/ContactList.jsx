import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

const ContactListItem = ({ name, phone, onRemove }) => {
    return (
        <li className={css.item}>
            <span className={css.span}>
                {name}:{phone}
            </span>
            <button className="btn" onClick={onRemove}>
                Delete
            </button>
        </li>
    );
};

export const ContactList = ({ contacts, onRemove }) => {
    console.log(contacts);
    return (
        <ul className={css.contacts}>
            {contacts?.map(({ id, name, phone }) => (
                <ContactListItem
                    key={id}
                    name={name}
                    phone={phone}
                    onRemove={() => onRemove(id)}
                />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.node.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default ContactList;
