import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListElement.module.css';

const propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  favorite: PropTypes.bool,
};
const defaultProps = {
  name: '',
  username: '',
  favorite: false,
};

const ListElement = ({ listElement: { name, username, favorite } }) => (
  <div className={styles.ListElement}>
    <p>{name}</p>
    <p className={styles.SecondaryInfo}>
      <em>
        aka
        {' '}
        {username}
      </em>
    </p>
  </div>
);

ListElement.propTypes = propTypes;
ListElement.defaultProps = defaultProps;

export default ListElement;
