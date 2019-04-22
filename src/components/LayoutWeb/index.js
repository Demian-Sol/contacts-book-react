import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutWeb.module.css';
import CompleteContactsList from '../CompleteContactsList';
import SearchForm from '../SearchForm';
import ContactForm from '../ContactFormWeb';

const propTypes = {
  listDataAll: PropTypes.array,
  listDataFavorite: PropTypes.array,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  displayedContact: PropTypes.object,
  updateContact: PropTypes.func,
  setContactId: PropTypes.func,
  toggleFavorite: PropTypes.func,
};
const defaultProps = {
  listDataAll: [],
  listDataFavorite: [],
  searchValue: '',
  setSearchValue: () => null,
  updateContact: () => null,
  setContactId: () => null,
  toggleFavorite: () => null,
};

const LayoutWeb = ({
  listDataAll,
  setSearchValue,
  searchValue,
  displayedContact,
  updateContact,
  setContactId,
  toggleFavorite,
  listDataFavorite,
}) => (
  <div className={styles['layout-web']}>
    <div className={styles['list-area']}>
      <SearchForm
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <CompleteContactsList
        listDataAll={listDataAll}
        listDataFavorite={listDataFavorite}
        setContactId={setContactId}
        toggleFavorite={toggleFavorite}
      />
    </div>
    <div className={styles['contact-area']}>
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
