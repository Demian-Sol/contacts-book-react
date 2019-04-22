import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ListComponent from './ListComponent';
import styles from './CompleteContactsList.module.css';

const propTypes = {
  listDataAll: PropTypes.array,
  listDataFavorite: PropTypes.array,
  setContactId: PropTypes.func,
  toggleFavorite: PropTypes.func,
};
const defaultProps = {
  listDataAll: [],
  listDataFavorite: [],
  setContactId: () => null,
  toggleFavorite: () => null,
};

class CompleteContactsList extends Component {
  state = {
    isFavoriteListOpen: true,
    isCompleteListOpen: true,
  }

  toggleFavoriteList = () => {
    this.setState(prevState => ({ isFavoriteListOpen: !prevState.isFavoriteListOpen }));
  }

  toggleCompleteList = () => {
    this.setState(prevState => ({ isCompleteListOpen: !prevState.isCompleteListOpen }));
  }

  render() {
    const { listDataAll, listDataFavorite, setContactId, toggleFavorite } = this.props;
    const { isCompleteListOpen, isFavoriteListOpen } = this.state;

    return (
      <>
        <Button
          onClick={this.toggleFavoriteList}
          className={styles['toggle-button']}
        >
          <h4>
            {'Contacts - Favorite'}
          </h4>
        </Button>
        {isFavoriteListOpen && (
          <ListComponent
            listData={listDataFavorite}
            setContactId={setContactId}
            toggleFavorite={toggleFavorite}
          />
        )}
        <Button
          onClick={this.toggleCompleteList}
          className={styles['toggle-button']}
        >
          <h4>
            {'Contacts - All'}
          </h4>
        </Button>
        {isCompleteListOpen && (
          <ListComponent
            listData={listDataAll}
            setContactId={setContactId}
            toggleFavorite={toggleFavorite}
          />
        )}
      </>
    );
  }
}

CompleteContactsList.propTypes = propTypes;
CompleteContactsList.defaultProps = defaultProps;

export default CompleteContactsList;
