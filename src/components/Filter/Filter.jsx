import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { filter } from 'redux/contacts/contactsActions'
import styles from './Filter.module.css';



  export const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(getFilteredContacts);

    const inputChange = e => {
      const changeValue = e.target.value;
      dispatch(filter(changeValue));
    };

    return (
      <div className={styles.filterInput}>
    <label>Find contacts by name</label>
    <input className={styles.filter} type="text" name="number" value={filterValue} onChange={inputChange} placeholder='Enter name'/>
  </div>);
};
