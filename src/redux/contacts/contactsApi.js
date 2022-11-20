import axios from 'axios';

const BASE_URL = 'https://636ec388bb9cf402c8093295.mockapi.io/api/contacts';


const instance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchContacts() {
    const { data } = await instance.get('/');
    return data;
    

}

export async function addContacts(newContact) {
    const { data } = await instance.post('/', newContact);
    return data;
}

export async function removeContacts(id) {
     const { data } = await instance.delete(`/${id}`);
    return data;
}