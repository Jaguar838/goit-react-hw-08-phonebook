import { Component } from 'react';
import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import testContacts from 'server/contacts.json';
console.log(testContacts);

export default class App extends Component {
    state = {
        contacts: { testContacts },
        filter: '',
        name: '',
        phone: '',
    };

    handleAddContact = newContact =>
        this.setState(({ contacts }) => ({
            contacts: [...contacts, newContact],
        }));

    handleCheckUniqueContact = name => {
        const { contacts } = this.state;
        const isExistContact = !!contacts.find(
            contact => contact.name === name,
        );
        isExistContact && alert('Contact is already exist');
        return !isExistContact;
    };

    handleRemoveContact = id =>
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== id),
        }));

    handleChangeFilter = filter => this.setState({ filter });
    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();
        return (
            <Layout>
                <SectionWrap title="Phonebook">
                    <ContactForm
                        onAdd={this.handleAddContact}
                        onCheckUnique={this.handleCheckUniqueContact}
                    />
                </SectionWrap>

                <SectionWrap title="Contact List">
                    <Filter
                        filter={filter}
                        onChange={this.handleChangeFilter}
                    />
                    <ContactList
                        contacts={visibleContacts}
                        onRemove={this.handleRemoveContact}
                    />
                </SectionWrap>
            </Layout>
        );
    }
}
