import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement';
import GroupingElement from './GroupingElement';

const propTypes = {
  listData: PropTypes.array.isRequired,
  setContactId: PropTypes.func,
  toggleFavorite: PropTypes.func,
};
const defaultProps = {
  setContactId: () => null,
  toggleFavorite: () => null,
};

const ListComponent = ({ listData, setContactId, toggleFavorite }) => {
  return listData.map((listElement, index, arr) => (
    <Fragment key={listElement.id}>
      { (index === 0 || listElement.name.charAt(0) !== arr[index - 1].name.charAt(0))
      && (
        <GroupingElement
          letter={listElement.name.charAt(0)}
        />
      )}
      <ListElement
        listElement={listElement}
        setContactId={setContactId}
        toggleFavorite={toggleFavorite}
      />
    </Fragment>
  ));
};

ListComponent.propTypes = propTypes;
ListComponent.defaultProps = defaultProps;

export default ListComponent;
