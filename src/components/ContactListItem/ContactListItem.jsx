import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './ContactListItemStyle.css';
import PropTypes from 'prop-types';



export const ContactListItem = ({ filteredContact, deleteContact }) => {

  const handleDelete = () => {
    deleteContact(filteredContact.id);
    Notify.success(
      `${filteredContact.name} was successfully deleted from your contacts!`,
      { position: 'center-top' }
    );
  };



  return (
    <li className="contact-list-item">
      <p className="contact">{filteredContact.name}:</p>
      <p className="contact">{filteredContact.number}</p>
      <button className="deleteBtn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};


ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
