import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/contactsAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  fetchContacts
);

export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  user => addContact(user)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
