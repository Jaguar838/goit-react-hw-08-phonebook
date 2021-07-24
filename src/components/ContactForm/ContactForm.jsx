import React, { Component } from 'react';
import uuid from 'react-uuid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const INICIAL_STATE = {
    name: '',
    phone: '',
};
export class ContactForm extends Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired,
    };
    state = INICIAL_STATE;

    handleChangeForm = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isValidateForm = this.validateForm();
        if (!isValidateForm) return;
        onAdd({ id: uuid(), name, phone });
        this.resetForm();
    };

    resetForm = () => {
        this.setState(INICIAL_STATE);
    };

    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some field is empty');
            return false;
        }
        return onCheckUnique(name);
    };
    render() {
        const { name, phone } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChangeForm}
                />
                <input
                    className={css.input}
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.handleChangeForm}
                />
                <button className="btn" type="submit">
                    Add Contact
                </button>
            </form>
        );
    }
}
