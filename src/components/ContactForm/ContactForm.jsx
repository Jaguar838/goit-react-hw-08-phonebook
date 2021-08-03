import React, { useState } from 'react';
import uuid from 'react-uuid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const INICIAL_STATE = {
    name: '',
    phone: '',
};
export function ContactForm ({onAdd}) {
    
    const [name,setName]=useState('');
  const [phone,setPhone]=useState('');

    function handleChangeForm ({ target })  {
        const { name, value } = target;
        
        switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setPhone(value);
        break;
      default:
        return;
    }
    };

    function handleFormSubmit(evt) {
        evt.preventDefault();
//         const { name, phone } = this.state;
//         const { onAdd } = this.props;
//         const isValidateForm = this.validateForm();
//         if (!isValidateForm) return;
        onAdd({ id: uuid(), name, phone });
        resetForm();
    };

    resetForm = () => {
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
    render() {
        const { name, phone } = this.state;
        return (
            <form onSubmit={handleFormSubmit(evt)}>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    value={name}
                    onChange={handleChangeForm(target)}
                />
                <input
                    className={css.input}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    value={phone}
                    onChange={handleChangeForm(target)}
                />
                <button className="btn" type="submit">
                    Add Contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
//     onCheckUnique: PropTypes.func.isRequired,
    };
