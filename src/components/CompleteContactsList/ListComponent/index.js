import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListElement from './ListElement';
import GroupingElement from './GroupingElement';

const propTypes = {
  listData: PropTypes.array.isRequired,
};

const ListComponent = ({ listData, setContactId }) => (
  listData.map((listElement, index, arr) => {
    if (index === 0 || listElement.name.charAt(0) !== arr[index - 1].name.charAt(0)) {
      return (
        <Fragment key={listElement.id}>
          <GroupingElement
            letter={listElement.name.charAt(0)}
          />
          <ListElement
            listElement={listElement}
            setContactId={setContactId}
          />
        </Fragment>
      );
    }
    return (
      <ListElement
        key={listElement.id}
        listElement={listElement}
        setContactId={setContactId}
      />
    );
  })
);

ListComponent.propTypes = propTypes;

export default ListComponent;

// const ListComponent = ({ listData, handleContactClick, setContactId }) => {
//   return listData.map((listElement, index, arr) => (
//     <Fragment key={listElement.id}>
//       { (index === 0 || listElement.name.charAt(0) !== arr[index - 1].name.charAt(0))
//       && (
//         <GroupingElement
//           letter={listElement.name.charAt(0)}
//         />
//       )}
//       <ListElement
//         listElement={listElement}
//         setContactId={setContactId}
//       />
//     </Fragment>
//   ));
// };
