import * as types from './types';
import { CONTACTS_LS_LABEL } from '../constants';

const initialState = {
  contacts: [],
  error: '',
  searchField: '',
  displayedContactId: '',
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
    case types.SET_CONTACT_ID:
      return {
        ...state,
        displayedContactId: action.id,
      };
    case types.UPDATE_CONTACT:
      const updatedContacts = state.contacts
        .map(el => (el.id === action.contact.id ? action.contact : el));
        // local storage accessing should go into saga, properly
      window.localStorage.setItem(CONTACTS_LS_LABEL, JSON.stringify(updatedContacts));
      return {
        ...state,
        contacts: updatedContacts,
      };
    case types.TOGGLE_FAVORITE:
      const contactsAfterToggle = state.contacts
        .map(el => {
          if (el.id === action.toggleId) {
            return {
              ...el,
              favorite: !el.favorite,
            };
          }
          return el;
        });
      window.localStorage.setItem(CONTACTS_LS_LABEL, JSON.stringify(contactsAfterToggle));
      return {
        ...state,
        contacts: contactsAfterToggle,
      };
    default:
      return state;
  }
};

export default appReducer;
