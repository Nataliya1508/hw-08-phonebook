import { createReducer } from "@reduxjs/toolkit";
import { fetchContactsCreate, addContactsCreate, removeContactsCreate } from './contactsOperations';
import { filter } from 'redux/contacts/contactsActions';

const entities = createReducer([], {
    [fetchContactsCreate.fulfilled]: (_, action) => action.payload,
    [addContactsCreate.fulfilled]: (state, action) => [action.payload, ...state],
    [removeContactsCreate.fulfilled]: (state, action) =>
        state.filter(item => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
    [fetchContactsCreate.pending]: () => true,
    [fetchContactsCreate.fulfilled]: () => false,
    [fetchContactsCreate.rejected]: () => false,
    [addContactsCreate.pending]: () => true,
    [addContactsCreate.fulfilled]: () => false,
    [addContactsCreate.rejected]: () => false,
    [removeContactsCreate.pending]: () => true,
    [removeContactsCreate.fulfilled]: () => false,
    [removeContactsCreate.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContactsCreate.rejected]: (_, action) => action.payload,
    [fetchContactsCreate.pending]: () => null,
    [addContactsCreate.rejected]: (_, action) => action.payload,
    [addContactsCreate.pending]: () => null,
    [removeContactsCreate.rejected]: (_, action) => action.payload,
    [removeContactsCreate.pending]: () => null,
})
const filterReducer = createReducer('', {
    [filter]: (_, action) => action.payload,
 })

export { entities, isLoading, error, filterReducer };