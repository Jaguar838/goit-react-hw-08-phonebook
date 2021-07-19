import { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
// import PropTypes from 'prop-types'

export class ContactForm extends Component {
    state = {
        name: "",
        phone: "",
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit({ id: uuidv4(), name, number });
        this.reset();
      };
    
      reset = () => {
        this.setState({
          name: "",
          number: "",
        });
      };

    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value });
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

// ContactForm.PropTypes