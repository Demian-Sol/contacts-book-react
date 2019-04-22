// data alphabetical sorting and search filtering is taken away into utils
import processSelectedData from '../utils';

export const selectListDataAll = state => {
  const unsortedArray = state.contacts.map(contact => {
    const { name, username, favorite, id } = contact;
    return { name, username, favorite, id };
  });
  return processSelectedData(unsortedArray, state.searchField);
};

export const selectListDataFavorite = state => {
  const unsortedArray = state.contacts
    .filter(el => el.favorite)
    .map(contact => {
      const { name, username, favorite, id } = contact;
      return { name, username, favorite, id };
    });
  return processSelectedData(unsortedArray, state.searchField);
};

export const selectSearchValue = state => state.searchField;

export const selectDisplayedContact = state => {
  if (state.displayedContactId === '' || state.contacts.length === 0) return null;
  return state.contacts.find(el => el.id === +state.displayedContactId);
};
