import axios from "axios";

axios.defaults.baseURL =
  
export function getContacts() {
  return axios.get("/contacts");
}

export function addContact(contact) {
  console.log(contact);
  return axios.post("/contacts", contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}
