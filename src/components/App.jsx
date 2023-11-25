// import css from './App.module.css';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectContacts,
//   selectContactsError,
// } from 'redux/contacts/contactsSelectors';
// import { useEffect } from 'react';
// import { getContactsThunk } from 'redux/contacts/contactsThunk';
// import { Loader } from './Loader/Loader';
// import { Notify } from 'notiflix';

// export const App = () => {
//   const { items } = useSelector(selectContacts);
//   const error = useSelector(selectContactsError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContactsThunk());
//   }, [dispatch]);

//   return (
//     <div>
//       {error && <Loader />}
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       {items.length > 0 ? (
//         <>
//           <Filter />
//           <ContactList />
//         </>
//       ) : error ? (
//         Notify.failure(error)
//       ) : (
//         <p className={css.desc}>Phonebook is empty</p>
//       )}
//     </div>
//   );
// };

// RTK Query

import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix';
import { useFetchContactsQuery } from 'redux/contacts/RTKQuery/contactsSlice';

export const App = () => {
  const { data, error } = useFetchContactsQuery();

  return (
    <div>
      {error && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {data?.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : error ? (
        Notify.failure(error)
      ) : (
        <p className={css.desc}>Phonebook is empty</p>
      )}
    </div>
  );
};
