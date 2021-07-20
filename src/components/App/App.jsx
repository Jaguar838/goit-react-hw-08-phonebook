import { Component } from 'react';
import { ContactForm } from "components/ContactForm";
import { ContactList } from 'components/ContactList';
// import {Filter} from 'components/Filter'
export default class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleAddContact = (newContact) => this.setState(({ contacts }) => ({
    contacts: [...contacts, newContact],
  }))

  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state
    const isExistContact = !!contacts.find((contact) => contact.name === name)
    isExistContact && alert('Contact is already exist')
    return !isExistContact
  }

  handleRemoveContact=(id)=> this.setState(({contacts})=> ({contacts: contacts.filter((contact)=> contact.id !== id)}))
  render() {
    const { contacts } = this.state;
    return (
      <>
        <h2>Form Contact</h2>
        <ContactForm onAdd={this.handleAddContact} onCheckUnique={this.handleCheckUniqueContact} />
        <ContactList contacts={contacts} onRemove={this.handleRemoveContact}/>
        
      </>
    );
  }
};

