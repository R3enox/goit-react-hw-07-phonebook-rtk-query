// import { useDispatch, useSelector } from 'react-redux';
// import css from './Filter.module.css';
// import { filterChange } from 'redux/filters/filtersSlice';
// import { selectFilterTerm } from 'redux/filters/filtersSelectors';

// export const Filter = () => {
//   const value = useSelector(selectFilterTerm);
//   const dispatch = useDispatch();

//   const filterContacts = evt => {
//     const filterValue = evt.target.value.toLowerCase().trim();
//     dispatch(filterChange(filterValue));
//   };

//   return (
//     <div className={css.wrapper}>
//       <label className={css.labelText}>
//         Find contacts by name
//         <input
//           className={css.inputAdd}
//           type="text"
//           name="filters"
//           value={value}
//           onChange={filterContacts}
//         />
//       </label>
//     </div>
//   );
// };

//RTK Query
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterChange } from 'redux/filters/filtersSlice';
import { selectFilterTerm } from 'redux/filters/filtersSelectors';

export const Filter = () => {
  const value = useSelector(selectFilterTerm);
  const dispatch = useDispatch();

  const filterContacts = evt => {
    const filterValue = evt.target.value.toLowerCase().trim();
    dispatch(filterChange(filterValue));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.labelText}>
        Find contacts by name
        <input
          className={css.inputAdd}
          type="text"
          name="filters"
          value={value}
          onChange={filterContacts}
        />
      </label>
    </div>
  );
};
