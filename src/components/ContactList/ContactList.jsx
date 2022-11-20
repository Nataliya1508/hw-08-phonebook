import { React } from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { getContacts, getFilteredContacts, isLoading } from 'redux/contacts/contactsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsCreate } from 'redux/contacts/contactsOperations'
import styles from './ContactList.module.css';
import Loader from 'components/Loader/Loader';





export const ContactList = () => { 
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilteredContacts);
   const loading = useSelector(isLoading);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContactsCreate());
  }, [dispatch]);
  
   const filtersContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  };
  const contactsMap = value === '' ? contacts : filtersContacts();

 if (loading) {
    return <Loader />;
  }

    return (
     <div className={styles.contacts}>
      {contactsMap.map(({ id, phone, name }) => {
        return <ContactListItem key={id} id={id} name={name} number={phone} />;
      })}
    </div>
  );
};

export default ContactList;