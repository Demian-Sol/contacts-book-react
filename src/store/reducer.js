import * as types from './types';

const initialState = {
  contacts: [],
  error: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CONTACTS_DATA:
      return {
        ...state,
        contacts: action.contacts,
        error: '',
      };
    case types.SET_ERROR_INFO:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default appReducer;
