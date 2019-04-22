import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  setContactsData as setContacts,
  setErrorInfo as setError,
  setSearchValue as setSearch,
  setContactId as setContact,
  updateContact as updateC,
  toggleFavorite as toggle,

  selectListDataAll,
  selectSearchValue,
  selectDisplayedContact,
  selectListDataFavorite,
} from './store';
import { CONTACTS_LS_LABEL, DATA_SOURCE_URL } from './constants';
import LayoutWeb from './components/LayoutWeb';
import LayoutMobile from './components/LayoutMobile';

const propTypes = {
  setContactsData: PropTypes.func,
  setErrorInfo: PropTypes.func,
  setSearchValue: PropTypes.func,
  updateContact: PropTypes.func,
  setContactId: PropTypes.func,
  toggleFavorite: PropTypes.func,
  listDataAll: PropTypes.array,
  listDataFavorite: PropTypes.array,
  searchValue: PropTypes.string,
  displayedContact: PropTypes.object,
};
const defaultProps = {
  setContactsData: () => null,
  setErrorInfo: () => null,
  setSearchValue: () => null,
  updateContact: () => null,
  setContactId: () => null,
  toggleFavorite: () => null,
  listDataAll: [],
  listDataFavorite: [],
  searchValue: '',
};

class App extends Component {
  state = {
    currentWindowWidth: window.innerWidth,
  }

  componentDidMount() {
    const { setContactsData, setErrorInfo } = this.props;

    // this logic would go into saga in a bigger project
    const storedContacts = window.localStorage.getItem(CONTACTS_LS_LABEL);
    if (!storedContacts) {
      axios.get(DATA_SOURCE_URL)
        .then(response => {
          window.localStorage.setItem(CONTACTS_LS_LABEL, JSON.stringify(response.data));
          setContactsData(response.data);
        })
        .catch(error => setErrorInfo(error));
    } else {
      setContactsData(JSON.parse(storedContacts));
    }
    // for correct switching between layouts
    window.addEventListener('resize', this.updateCurrentWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCurrentWidth);
  }

  updateCurrentWidth = () => {
    this.setState({ currentWindowWidth: window.innerWidth });
  }

  render() {
    const {
      listDataAll,
      listDataFavorite,
      searchValue,
      setSearchValue,
      displayedContact,
      updateContact,
      setContactId,
      toggleFavorite,
    } = this.props;
    const { currentWindowWidth } = this.state;

    return (
      <Fragment>
        {currentWindowWidth > 767
          ? (
            <LayoutWeb
              listDataAll={listDataAll}
              listDataFavorite={listDataFavorite}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              displayedContact={displayedContact}
              updateContact={updateContact}
              setContactId={setContactId}
              toggleFavorite={toggleFavorite}
            />
          ) : (
            <LayoutMobile
              listDataAll={listDataAll}
              listDataFavorite={listDataFavorite}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              displayedContact={displayedContact}
              updateContact={updateContact}
              setContactId={setContactId}
              toggleFavorite={toggleFavorite}
            />
          )
        }
      </Fragment>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = state => (
  {
    listDataAll: selectListDataAll(state),
    searchValue: selectSearchValue(state),
    displayedContact: selectDisplayedContact(state),
    listDataFavorite: selectListDataFavorite(state),
  }
);
const mapDispatchToProps = {
  setContactsData: setContacts,
  setErrorInfo: setError,
  setSearchValue: setSearch,
  setContactId: setContact,
  updateContact: updateC,
  toggleFavorite: toggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
