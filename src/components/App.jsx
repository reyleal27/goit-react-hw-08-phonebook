import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './FilterContact/FilterContact';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from '../redux/selector';
// import { addContact, deleteContact } from '../redux/contactSlice';
import { setFilter } from '../redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from '../redux/operation';
import { useEffect } from 'react';


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
    console.log(handleAddContact)
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  console.log(handleDeleteContact)
  };

  const handleSetFilter = (newFilter) => {
    dispatch(setFilter(newFilter));
  };


  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  return (
    <div className="phonebook-wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      {contacts.length > 0 ? (
        <ContactList
          filterContact={filterContact}
          deleteContact={handleDeleteContact}
        />
      ) : (
        <p className="no-contacts"> No Saved Contacts</p>
      )}
    </div>
  );
};

export default App;
