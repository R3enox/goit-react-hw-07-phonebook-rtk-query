// import { createSelector } from '@reduxjs/toolkit';
// import { selectContacts } from 'redux/contacts/contactsSelectors';

export const selectFilterTerm = state => state.filterStore.filterTerm;
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilterTerm],
//   ({ items }, filterTerm) =>
//     items.filter(
//       ({ name, phone }) =>
//         name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
//         phone.toString().includes(filterTerm.toLowerCase().trim())
//     )
// );
