import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from './contactsApi'

export const fetchContactsCreate = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        try {
            const contacts = await contactsApi.fetchContacts();
            return contacts;
        } catch (error) {
            return error.message;
        }
    }
);

export const addContactsCreate = createAsyncThunk(
    'contacts/addContacts',
    async (newContact) => {
        try {
            const contacts = await contactsApi.addContacts(newContact);
            return contacts;
        } catch (error) {
            return error.message;
        }
    }
);

export const removeContactsCreate = createAsyncThunk(
    'contacts/removeContacts',
    async id => {
        try {
            const contacts = await contactsApi.removeContacts(id);
            return contacts;
        } catch (error) {
            return error.message;
        }
    }
);

