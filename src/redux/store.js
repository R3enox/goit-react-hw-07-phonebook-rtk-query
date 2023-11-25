import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filters/filtersSlice';
import { contactsApi } from './contacts/RTKQuery/contactsSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const productsConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const store = configureStore({
//   reducer: {
//     contactsStore: persistReducer(productsConfig, contactsReducer),
//     filterStore: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    // contactsStore: contactsReducer,
    // filterStore: filterReducer,

    // RTK Query
    [contactsApi.reducerPath]: contactsApi.reducer,
    filterStore: filterReducer,
  },
  // RTK Query
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),

  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});
