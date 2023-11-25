import axios from 'axios';

const BASE_URL = 'https://65608f4f83aba11d99d113ba.mockapi.io';

// export const fetchContacts = async () => {
//   const data = await fetch(`${BASE_URL}/contacts`);
//   return await data.json();
// };

// export const addContact = async data => {
//   const response = await fetch(`${BASE_URL}/contacts`, {
//     body: JSON.stringify(data),
//   });
//   return await response.json();
// };

// export const deleteContact = async id => {
//   const response = await fetch(`${BASE_URL}/contacts/${id}`);
//   return await response.json();
// };

export const fetchContacts = async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
};

export const addContact = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/contacts`, {
      ...user,
    });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithError(err.message);
  }
};

export const deleteContact = async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
    return data.id;
  } catch (err) {
    return thunkAPI.rejectWithError(err.message);
  }
};
