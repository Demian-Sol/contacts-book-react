import * as types from './types';

const initialState = {
  contacts: [],
  error: '',
  searchField: '',
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
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchField: action.searchValue,
      };
    default:
      return state;
  }
};

export default appReducer;
