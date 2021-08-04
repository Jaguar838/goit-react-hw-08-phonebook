import React, { useState } from 'react';
import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
// import { useUIDSeed } from 'react-uid';
import useLocalStorage from 'hooks/useLocalStorage';

// import testContacts from 'server/contacts.json';

export default function App() {
//     const uid = useUIDSeed();
    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useState('');

    const handleAddContact = data => {
       const addContact = {
      id: data.id,
      name: data.name,
      phone: data.phone,
    };
        
        setContacts((prevState) => [...prevState, addContact]);
    }
    
    const handleCheckUniqueContact = name => {
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

//    const formSubmit = data => {
//        console.log(data);
//        // const { contacts } = this.state;
//        const newContact = contacts.some(contact => contact.name === data.name);
//        if (newContact) {
//            alert(`${data.name} is already in contacts`);
//            return;
//        }

//        const contactData = {
//            id: uuidv4(),
//            name: data.name,
//            number: data.number,
//        };

//        setContacts(prevState => [...prevState, contactData]);
//    };

//    const deleteItem = listId => {
//        setContacts(state => state.filter(contact => contact.id !== listId));
//    };

//    const changeFilter = e => {
//        setFilter(e.currentTarget.value);
//    };

//    const getVisibleContacts = () => {
//        // const { filter, contacts } = this.state;
//        const normalizedFilter = filter.toLowerCase();

//        return contacts.filter(contact =>
//            contact.name.toLowerCase().includes(normalizedFilter),
//        );
//    };
