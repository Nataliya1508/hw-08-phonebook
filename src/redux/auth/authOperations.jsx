import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    Notiflix.Notify.info(
      'Registration was successful, the account was created'
    );
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Registration error, please try again');
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    Notiflix.Notify.success('Login successfully');
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      'The email or password is entered incorrectly or such an account does not exist. Try again.'
    );
    return error.response.status;
  }
});

export const logOut = createAsyncThunk('auth/logout', async thunkAPI => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(
      'Something went wrong, it was not possible to log out of the account. Try again.'
    );
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return error.response.status;
    }
  }
);
