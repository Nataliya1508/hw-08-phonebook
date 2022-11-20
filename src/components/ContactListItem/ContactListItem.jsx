import { useDispatch } from 'react-redux';
import { removeContactsCreate } from 'redux/contacts/contactsOperations'
import styles from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();
  
  const removeButton = () => {
    dispatch(removeContactsCreate(id));
  }
    return (
      <div className={styles.contacts}>
     <li key={id}>
                  <p>
                    <span>{name} : </span>
            {number}
            
                  </p>
                  <button type='button'
                    onClick={removeButton}>
                     
                    X
                  </button>
            </li>
            </div>
  );
};

ContactListItem.protoTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactListItem;