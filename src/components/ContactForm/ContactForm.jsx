import { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
// import PropTypes from 'prop-types'
const INICIAL_STATE = {
    name: "",
    phone: "",
}
export class ContactForm extends Component {
    state = INICIAL_STATE

    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value });
    }

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isValidateForm = this.validateForm();
        if (!isValidateForm) return;
        onAdd({ id: uuidv4(), name, phone });
        this.resetForm();
    };

    resetForm = () => {
        this.setState(INICIAL_STATE);
    };
    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some field is empty')
            return false
        }
        return onCheckUnique(name)
    }
    render() {
        const { name, phone } = this.state
        return (
            <form onSabmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm} />
                <input type="tel" name="phone" id="" placeholder="Enter phone number" value={phone} onChange={this.handleChangeForm} />
                <button type="submit">Add Contact</button>
            </form>
        )
    }
}

// ContactForm.PropTypes