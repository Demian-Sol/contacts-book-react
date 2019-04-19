import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  setContactsData as setContacts,
  setErrorInfo as setError,
  setSearchValue as setSearch,
  selectListDataAll,
  selectSearchValue,
} from './store';
import { CONTACTS_LS_LABEL, DATA_SOURCE_URL } from './constants';
import LayoutWeb from './components/LayoutWeb';
import './App.css';

const propTypes = {
  setContactsData: PropTypes.func,
  setErrorInfo: PropTypes.func,
  setSearchValue: PropTypes.func,
  listDataAll: PropTypes.array,
  searchValue: PropTypes.string,
};
const defaultProps = {
  setContactsData: () => null,
  setErrorInfo: () => null,
  setSearchValue: () => null,
  listDataAll: [],
  searchValue: '',
};

class App extends Component {
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
  }

  render() {
    const { listDataAll, searchValue, setSearchValue } = this.props;
    return (
      <LayoutWeb
        listDataAll={listDataAll}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = state => (
  {
    listDataAll: selectListDataAll(state),
    searchValue: selectSearchValue(state),
  }
);
const mapDispatchToProps = {
  setContactsData: setContacts,
  setErrorInfo: setError,
  setSearchValue: setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
