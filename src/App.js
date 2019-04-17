import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  setContactsData as setContacts,
  setErrorInfo as setError,
} from './store';
import { CONTACTS_LS_LABEL, DATA_SOURCE_URL } from './constants';
import './App.css';

const propTypes = {
  setContactsData: PropTypes.func,
  setErrorInfo: PropTypes.func,
};
const defaultProps = {
  setContactsData: () => null,
  setErrorInfo: () => null,
};

class App extends Component {
  componentDidMount() {
    const { setContactsData, setErrorInfo } = this.props;
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
    return (
      <div className="App">
        
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = state => {

};
const mapDispatchToProps = {
  setContactsData: setContacts,
  setErrorInfo: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
