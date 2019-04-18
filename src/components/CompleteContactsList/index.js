import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';

const propTypes = {
  listDataAll: PropTypes.array,
};
const defaultProps = {
  listDataAll: [],
};

const CompleteContactsList = ({ listDataAll }) => (
  <>
    <ListComponent
      listData={listDataAll}
    />
  </>
);

CompleteContactsList.propTypes = propTypes;
CompleteContactsList.defaultProps = defaultProps;

export default CompleteContactsList;
