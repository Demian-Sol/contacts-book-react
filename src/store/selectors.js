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
  return sortAlphabeticallyBy(unsortedArray, 'name');
};
