import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  createContactsThunk,
  deleteContactsThunk,
} from './contactsThunk';
import { initialState } from './initialState';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const newArr = [getContactsThunk, createContactsThunk, deleteContactsThunk];

const functionStatus = status => newArr.map(element => element[status]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.contacts.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.contacts.items.push(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(el => el.id !== payload);
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = defaultStatus;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...functionStatus(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...functionStatus(pending)), handlePending)
      .addMatcher(isAnyOf(...functionStatus(rejected)), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
