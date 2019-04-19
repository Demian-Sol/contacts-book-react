import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement';
import GroupingElement from './GroupingElement';

const propTypes = {
  listData: PropTypes.array.isRequired,
};

const ListComponent = ({ listData }) => (
  listData.map((listElement, index, arr) => {
    if (index === 0 || listElement.name.charAt(0) !== arr[index - 1].name.charAt(0)) {
      return (
        <Fragment key={listElement.id}>
          <GroupingElement
            letter={listElement.name.charAt(0)}
          />
          <ListElement
            listElement={listElement}
          />
        </Fragment>
      );
    }
    return (
      <ListElement
        key={listElement.id}
        listElement={listElement}
      />
    );
  })
);

ListComponent.propTypes = propTypes;

export default ListComponent;
