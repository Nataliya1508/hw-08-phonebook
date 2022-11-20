import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { getContacts, getFilteredContacts} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations'
// import Loader from 'components/Loader/loader';
import styles from './ContactList.module.css';


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilteredContacts);
  // const loading = useSelector(IsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, contacts, value]);

  const getFilteredNames = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  };

  const contactsMap = value === '' ? contacts : getFilteredNames();
  
  //  if (loading) {
  //   return <Loader />;
  // }

  return (
    // <div className={style.listWrapper}>
    //   {contacts.length > 0 &&
    //     searchContact.map(({ id, number, name }) => {
    //       return (
    //         <ContactListItem key={id} id={id} name={name} number={number} />
    //       );
    //     })}
    // </div>
     <div className={styles.contacts}>
      {contactsMap.map(({ id, phone, name }) => {
        return <ContactListItem key={id} id={id} name={name} number={phone} />;
      })}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
