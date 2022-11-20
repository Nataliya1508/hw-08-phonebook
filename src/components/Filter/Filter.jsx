import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
// import { contactsSelectors } from 'redux/contacts';
import {filter} from 'redux/contacts/contactsActions';
import styles from './Filter.module.css';
// import PropTypes from 'prop-types';
// import { authSelectors } from 'redux/auth';

// const Filter = () => {
//   const dispatch = useDispatch();
//   const value = useSelector(getFilteredContacts);
//   // const userName = useSelector(authSelectors.getUsername);

//   const inputChange = event => {
//     const changeValue = event.target.value;
//     dispatch(filter(changeValue));
//   };

//   return (
//     <div className={style.filter}>
//       <h2 className={style.contactsTitle}>
//         {' '}
//         Dear
//         <span className={style.userNameStyle}>{userName},</span> <br /> this is
//         your unique phonebook 🕮 Let's start!
//       </h2>
//       <label className={style.filterLabel}>
//         <p className={style.filterName}>| Find contacts by name |</p>
//         <input
//           className={style.input}
//           type="text"
//           name="number"
//           value={value}
//           onChange={inputChange}
//         />
//       </label>
//     </div>
//   );
// };

// Filter.propTypes = {
//   inputChange: PropTypes.func,
// };

// export default Filter;

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

export default Filter;