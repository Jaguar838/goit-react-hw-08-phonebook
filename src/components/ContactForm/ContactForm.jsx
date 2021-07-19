import { Component } from 'react'
import PropTypes from 'prop-types'

export class ContactForm extends Component {
    state = {
        name: "",
        phone: "",
    }
    handleChangeForm = ({ target }) {
        const { name, value } = target
        this.setState()
    }
    render() {
        const { name, phone } = this.state
        return (
            <form action="">
                <input type="text" name="name" placeholder="Enter name" value={name} onChange />
                <input type="tel" name="phone" id="" placeholder="Enter phone number" value={phone} onChange />
                <button type="submit">Add Contact</button>
            </form>
        )
    }
}
