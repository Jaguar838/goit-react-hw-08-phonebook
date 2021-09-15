import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_DB_HOST;
// axios.defaults.baseURL = 'http://localhost:7777';

export function getContacts() {
    return axios.get('/contacts');
}

export function addContact(contact) {
    console.log(contact);
    return axios.post('/contacts', contact);
}

export function deleteContact(id) {
    return axios.delete(`/contacts/${id}`);
}

export function editContact(id) {
    return axios.patch(`/contacts/${id}`);
}
