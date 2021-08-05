import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUIDSeed } from 'react-uid';
import { Button } from 'UI/Button';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const INICIAL_STATE = {
    name: '',
    phone: '',
};

export function ContactForm({ onAdd, onCheckUnique }) {
    const uid = useUIDSeed();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [value, setValue] = useState(INICIAL_STATE);

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;
        setValue({ [name]: value });
    };

    function validateForm() {
        const { name, phone } = value;
        if (!name || !phone) {
            alert('Some field is empty');
            return false;
        }
        return onCheckUnique(name);
    }
    const onSubmit = data => {
        const { name, phone } = value;
        const isValidateForm = validateForm();

        if (!isValidateForm) return;

        onAdd({ id: uid(data), name, phone });
        resetForm();
        console.log('Submit', data, errors);
    };

    const resetForm = () => {
        setValue(INICIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className={css.input}
                type="text"
                placeholder="Enter name"
                {...register('name', {
                    required: true,
                    pattern:
                        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                })}
                value={value.name}
                required
                onChange={handleChangeForm}
            />
            {errors.name && alert('Name is required.')}

            <input
                className={css.input}
                type="tel"
                placeholder="Enter phone number"
                {...register('phone', {
                    required: true,
                    pattern:
                        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                })}
                value={value.phone}
                required
                onChange={handleChangeForm}
            />
            {errors.phone && alert('Please enter number for phone.')}

            <Button type="submit">Add Contact</Button>
        </form>
    );
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onCheckUnique: PropTypes.func.isRequired,
};
