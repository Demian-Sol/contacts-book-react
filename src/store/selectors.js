export const selectListDataAll = state => state.contacts.map(contact => {
  const { name, username, favorite, id } = contact;
  return { name, username, favorite, id };
});
