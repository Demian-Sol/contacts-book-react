import React from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement';

const propTypes = {
  listData: PropTypes.array.isRequired,
};

const ListComponent = ({ listData }) => (
  listData.map(listElement => (
    <ListElement
      key={listElement.id}
      listElement={listElement}
    />
  ))
);

ListComponent.propTypes = propTypes;

export default ListComponent;
