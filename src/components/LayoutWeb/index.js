import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutWeb.module.css';
import CompleteContactsList from '../CompleteContactsList';


const propTypes = {
  listDataAll: PropTypes.array,
};
const defaultProps = {
  listDataAll: [],
}

const LayoutWeb = ({ listDataAll }) => (
  <div className={styles.LayoutWeb}>
    <div className={styles.ListArea}>
      <CompleteContactsList
        listDataAll={listDataAll}
      />
    </div>
    <div className={styles.ContactArea}>
      
    </div>
  </div>
);

LayoutWeb.propTypes = propTypes;
LayoutWeb.defaultProps = defaultProps;

export default LayoutWeb;
