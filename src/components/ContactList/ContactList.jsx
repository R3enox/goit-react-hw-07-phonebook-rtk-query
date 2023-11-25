// import { useDispatch, useSelector } from 'react-redux';

// import css from './ContactList.module.css';
// import { deleteContactsThunk } from 'redux/contacts/contactsThunk';
// import { selectContactsIsLoading } from 'redux/contacts/contactsSelectors';
// import { selectFilteredContacts } from 'redux/filters/filtersSelectors';
// import { Loader } from 'components/Loader/Loader';

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectContactsIsLoading);
//   const contacts = useSelector(selectFilteredContacts);

//   return (
//     <ul className={css.list}>
//       {isLoading && <Loader />}
//       {!isLoading &&
//         contacts.map(({ id, name, phone }) => (
//           <li key={id} className={css.listItem}>
//             {name}: {phone}
//             <button
//               disabled={isLoading}
//               onClick={() => dispatch(deleteContactsThunk(id))}
//               className={css.btnDel}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//     </ul>
//   );
// };

// RTK Query
import css from './ContactList.module.css';
import { Loader } from 'components/Loader/Loader';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/RTKQuery/contactsSlice';
import { selectFilterTerm } from 'redux/filters/filtersSelectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const filterTerm = useSelector(selectFilterTerm);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const selectFilteredContacts = data.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(filterTerm.toLowerCase().trim()) ||
      phone.toString().includes(filterTerm.toLowerCase().trim())
  );

  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {!isLoading &&
        selectFilteredContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.listItem}>
            {name}: {phone}
            <button
              disabled={isLoading}
              onClick={() => {
                deleteContact(id);
              }}
              className={css.btnDel}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
