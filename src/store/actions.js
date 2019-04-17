import * as types from './types';

export const setContactsData = contacts => (
  {
    type: types.SET_CONTACTS_DATA,
    contacts,
  }
);

export const setErrorInfo = error => (
  {
    type: types.SET_ERROR_INFO,
    error,
  }
);
