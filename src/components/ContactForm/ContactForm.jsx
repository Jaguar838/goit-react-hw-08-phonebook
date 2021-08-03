import React, { useState } from 'react';
import uuid from 'react-uuid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export function ContactForm({ onAdd }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        }
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();
        //         const { name, phone } = this.state;
        //         const { onAdd } = this.props;
        //         const isValidateForm = this.validateForm();
        //         if (!isValidateForm) return;
        onAdd({ id: uuid(), name, phone });
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    //     function validateForm() {
    //         const { name, phone } = this.state;
    //         const { onCheckUnique } = this.props;
    //         if (!name || !phone) {
    //             alert('Some field is empty');
    //             return false;
    //         }
    //         return onCheckUnique(name);
    //     };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                className={css.input}
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={name}
                onChange={handleChangeForm}
            />
            <input
                className={css.input}
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                value={phone}
                onChange={handleChangeForm}
            />
            <button className="btn" type="submit">
                Add Contact
            </button>
        </form>
    );
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
    //     onCheckUnique: PropTypes.func.isRequired,
};
