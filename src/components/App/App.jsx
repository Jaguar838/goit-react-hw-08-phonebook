import React, { useState } from 'react';
import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import testContacts from 'server/contacts.json';

export default function App() {
    const [contacts, setContacts] = useLocalStorage('contacts', [...testContacts]);
    const [filter, setFilter] = useState('');

    const handleAddContact = newContact => {
        setContacts(prevState => [...prevState, newContact]);
    };

    const handleCheckUniqueContact = name => {
        const isExistContact = !!contacts.find(
            contact => contact.name === name,
        );
        isExistContact && alert('Contact is already exist');
        return !isExistContact;
    };

    const handleRemoveContact = id =>
        setContacts(contacts.filter(contact => contact.id !== id));

    const handleChangeFilter = filter => setFilter(filter);

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
                    contacts={getVisibleContacts()}
                    onRemove={handleRemoveContact}
                />
            </SectionWrap>
        </Layout>
    );
}
