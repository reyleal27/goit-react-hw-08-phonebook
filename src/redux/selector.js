import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filterStatus) => {
    if (!filterStatus) {
        return contacts;
    }
    const lowerCaseFilter = filterStatus.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter)); 
});
