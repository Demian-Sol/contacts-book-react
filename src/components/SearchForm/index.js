import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';
import { TRANSLATIONS } from '../../constants';

const propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};
const defaultProps = {
  searchValue: '',
  setSearchValue: () => null,
};

class SearchForm extends Component {
  handleChange = event => {
    const { setSearchValue } = this.props;
    const { value } = event.target;

    setSearchValue(value);
  };

  render() {
    const { searchValue } = this.props;

    return (
      <input
        className={styles['search-form']}
        type="text"
        placeholder={TRANSLATIONS.SEARCH_FORM_PLACEHOLDER}
        onChange={this.handleChange}
        value={searchValue}
      />
    );
  }
}

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

export default SearchForm;
