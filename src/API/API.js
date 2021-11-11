import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_DB_HOST;
console.log(
    '🚀 ~ file: API.js ~ line 4 ~ process.env.REACT_APP_DB_HOST',
    process.env.REACT_APP_DB_HOST,
);
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
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
