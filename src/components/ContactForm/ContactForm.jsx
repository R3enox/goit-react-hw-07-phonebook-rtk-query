// import { useState } from 'react';
// import css from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { createContactsThunk } from 'redux/contacts/contactsThunk';
// import { selectContacts } from 'redux/contacts/contactsSelectors';

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const { items } = useSelector(selectContacts);

//   // const [name, setName] = useState('');
//   // const [number, setNumber] = useState('');
//   const [user, setUser] = useState({ name: '', phone: '' });

//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const isExist = items.some(
//       item => item.name.toLowerCase() === user.name.toLowerCase()
//     );

//     if (isExist) {
//       alert(`${user.name} is already in contacts.`);
//       return;
//     }
//     dispatch(
//       createContactsThunk({ name: user.name, phone: user.phone, id: nanoid() })
//     );
//     // setName('');
//     // setNumber('');
//     setUser({ name: '', phone: '' });
//   };

//   const handleChange = evt => {
//     const { name, value } = evt.target;
//     setUser({ ...user, [name]: value });
//     // switch (name) {
//     //   case 'name': {
//     //     setName(value);
//     //     return;
//     //   }
//     //   case 'number': {
//     //     setNumber(value);
//     //     return;
//     //   }
//     //   default:
//     //     return;
//     // }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.formWrapper}>
//       <label className={css.labelText}>
//         Name
//         <input
//           className={css.inputAdd}
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           required
//         />
//       </label>
//       <label className={css.labelText}>
//         Phone
//         <input
//           className={css.inputAdd}
//           type="tel"
//           name="phone"
//           value={user.phone}
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           required
//         />
//       </label>
//       <button type="submit" className={css.btnSbm}>
//         Add contact
//       </button>
//     </form>
//   );
// };

// RTK Query
import { useState } from 'react';
import css from './ContactForm.module.css';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/RTKQuery/contactsSlice';

export const ContactForm = () => {
  const { data: items } = useFetchContactsQuery();

  const [user, setUser] = useState({ name: '', phone: '', id: '' });
  const [addContact] = useAddContactMutation();

  const handleSubmit = evt => {
    evt.preventDefault();

    const isExist = items.some(
      item => item.name.toLowerCase() === user.name.toLowerCase()
    );

    if (isExist) {
      alert(`${user.name} is already in contacts.`);
      return;
    }
    addContact(user);
    setUser({ name: '', phone: '' });
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className={css.formWrapper}>
      <label className={css.labelText}>
        Name
        <input
          className={css.inputAdd}
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.labelText}>
        Phone
        <input
          className={css.inputAdd}
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>
      <button type="submit" className={css.btnSbm}>
        Add contact
      </button>
    </form>
  );
};
