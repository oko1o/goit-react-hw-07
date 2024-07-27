import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/contactsSelectors';

export const selectFilterName = (state) => state.filter.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
