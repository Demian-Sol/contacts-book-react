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

class ListElement extends React.Component {
  handleClick = () => {
    const { listElement: { id }, setContactId } = this.props;
    setContactId(id);
  }

  render() {
    const { listElement: { name, username, favorite } } = this.props;
    return (
      <div className={styles.listElement} onClick={this.handleClick}>
        <p className={styles.primaryInfo}>{name}</p>
        <p className={styles.secondaryInfo}>
          <em>
            {'aka '}
            {username}
          </em>
        </p>
      </div>
    )
  };
}

ListElement.propTypes = propTypes;
ListElement.defaultProps = defaultProps;

export default ListElement;
