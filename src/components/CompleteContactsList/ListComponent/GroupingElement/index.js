import React from 'react';
import PropTypes from 'prop-types';
import styles from './GroupingElement.module.css';

const propTypes = {
  letter: PropTypes.string,
};
const defaultProps = {
  letter: '',
};

const GroupingElement = ({ letter }) => (
  <div className={styles.groupingElement}>
    <span className={styles.letter}>{letter}</span>
    <hr />
  </div>
);

GroupingElement.propTypes = propTypes;
GroupingElement.defaultProps = defaultProps;

export default GroupingElement;
