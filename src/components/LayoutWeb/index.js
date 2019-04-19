import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutWeb.module.css';
import CompleteContactsList from '../CompleteContactsList';
import SearchForm from '../SearchForm';
import ContactForm from '../ContactForm';

const propTypes = {
  listDataAll: PropTypes.array,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};
const defaultProps = {
  listDataAll: [],
  searchValue: '',
  setSearchValue: () => null,
};

const LayoutWeb = ({
  listDataAll, setSearchValue, searchValue, displayedContact, updateContact
}) => (
  <div className={styles.LayoutWeb}>
    <div className={styles.ListArea}>
      <SearchForm
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <CompleteContactsList
        listDataAll={listDataAll}
      />
    </div>
    <div className={styles.ContactArea}>
      {displayedContact !== null
      && (
        <ContactForm
          displayedContact={displayedContact}
          updateContact={updateContact}
        />
      )}
    </div>
  </div>
);

LayoutWeb.propTypes = propTypes;
LayoutWeb.defaultProps = defaultProps;

export default LayoutWeb;
