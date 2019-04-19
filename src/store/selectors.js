const sortAlphabeticallyBy = (array, prop) => array.sort((a, b) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
});

export const selectListDataAll = state => {
  const unsortedArray = state.contacts.map(contact => {
    const { name, username, favorite, id } = contact;
    return { name, username, favorite, id };
  });
  if (state.searchField.trim() !== '') {
    const filteredArray = unsortedArray.filter(element => {
      const { name, username } = element;
      const searchVal = state.searchField.trim();
      return (name.indexOf(searchVal) !== -1 || username.indexOf(searchVal) !== -1);
    });
    return sortAlphabeticallyBy(filteredArray, 'name');
  }
  return sortAlphabeticallyBy(unsortedArray, 'name');
};

export const selectSearchValue = state => state.searchField;
