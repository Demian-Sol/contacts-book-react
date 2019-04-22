const sortAlphabeticallyBy = (array, prop) => array.sort((a, b) => {
  if (a[prop] < b[prop]) return -1;
  if (a[prop] > b[prop]) return 1;
  return 0;
});

const filterAndSortData = (unsortedArray, searchField) => {
  let processedArray = unsortedArray;
  if (searchField.trim() !== '') {
    processedArray = processedArray.filter(element => {
      const { name, username } = element;
      const searchVal = searchField.trim();
      return (name.indexOf(searchVal) !== -1 || username.indexOf(searchVal) !== -1);
    });
  }
  return sortAlphabeticallyBy(processedArray, 'name');
};

export default filterAndSortData;
