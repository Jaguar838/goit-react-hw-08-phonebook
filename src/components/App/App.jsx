import React, { useState, useEffect } from 'react';
import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
// import testContacts from 'server/contacts.json';

export default function App() {
    const [contacts, setContacts] = useState(() =>
        JSON.parse(localStorage.getItem('contacts')),
    );
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }, [contacts]);

    const handleAddContact = newContact =>
        setContacts([...contacts, newContact]);

    const handleCheckUniqueContact = name => {
        const { contacts } = this.state;
        const isExistContact = !!contacts.find(
            contact => contact.name === name,
        );
        isExistContact && alert('Contact is already exist');
        return !isExistContact;
    };

    const handleRemoveContact = id =>
        setContacts(contacts.filter(contact => contact.id !== id));

    const handleChangeFilter = filter => setFilter({ filter });

    const getVisibleContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    return (
        <Layout>
            <SectionWrap title="Phonebook">
                <ContactForm
                    onAdd={handleAddContact}
                    onCheckUnique={handleCheckUniqueContact}
                />
            </SectionWrap>

            <SectionWrap title="Contact List">
                <Filter filter={filter} onChange={handleChangeFilter} />
                <ContactList
                    contacts={getVisibleContacts}
                    onRemove={handleRemoveContact}
                />
            </SectionWrap>
        </Layout>
    );
}
