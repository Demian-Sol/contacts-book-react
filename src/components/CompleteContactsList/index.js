import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';

const propTypes = {
  listDataAll: PropTypes.array,
};
const defaultProps = {
  listDataAll: [],
};

class CompleteContactsList extends Component {
  render() {
    const { listDataAll, setContactId } = this.props;
    return (
      <>
        <ListComponent
          listData={listDataAll}
          setContactId={setContactId}
        />
      </>
    );
  }
}

CompleteContactsList.propTypes = propTypes;
CompleteContactsList.defaultProps = defaultProps;

export default CompleteContactsList;
