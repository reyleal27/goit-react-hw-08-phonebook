import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import Filter from '../FilterContact/FilterContact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilter,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from '../../redux/selector';
import { setFilter } from '../../redux/filterSlice';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/operation';
import { useEffect } from 'react';


export const ContactsPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
    const visibleContacts = useSelector(selectVisibleContacts);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
    console.log(handleAddContact);
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    console.log(handleDeleteContact);
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter));
  };

  return (
    <>
    
      <div className="phonebook-wrapper">
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} contacts={visibleContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={handleSetFilter} />
        {isLoading && <h2>Loading...</h2>}
        {error && <h3>Error:{error}</h3>}
        {visibleContacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            deleteContact={handleDeleteContact}
          />
        ) : (
          <p className="no-contacts"> No Saved Contacts</p>
        )}
      </div>
    </>
  );
};
