import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});


export const { addContacts, removeContact, changeFilter } =
  contactsSlice.actions;
export default contactsSlice.reducer;