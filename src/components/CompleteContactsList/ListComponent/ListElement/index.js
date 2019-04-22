import React from 'react';
import PropTypes from 'prop-types';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorderOutlined';
import styles from './ListElement.module.css';

const propTypes = {
  listElement: PropTypes.object,
  name: PropTypes.string,
  username: PropTypes.string,
  favorite: PropTypes.bool,
  id: PropTypes.number,
  setContactId: PropTypes.func,
  toggleFavorite: PropTypes.func,
};
const defaultProps = {
  listElement: {},
  name: '',
  username: '',
  favorite: false,
  setContactId: () => null,
  toggleFavorite: () => null,
};

class ListElement extends React.Component {
  handleClick = () => {
    const { listElement: { id }, setContactId } = this.props;

    setContactId(id);
  }

  handleIconClick = event => {
    const { listElement: { id }, toggleFavorite } = this.props;

    event.stopPropagation();
    toggleFavorite(id);
  }

  render() {
    const { listElement: { name, username, favorite } } = this.props;

    return (
      <div className={styles['list-element']} onClick={this.handleClick}>
        <span>
          <p className={styles['primary-info']}>{name}</p>
          <p className={styles['secondary-info']}>
            <em>
              {'aka '}
              {username}
            </em>
          </p>
        </span>
        {favorite ? (
          <Star
            className={styles['star-icon']}
            titleAccess="remove from Favorite"
            onClick={this.handleIconClick}
          />
        ) : (
          <StarBorder
            className={styles['star-icon']}
            titleAccess="add to Favorite"
            onClick={this.handleIconClick}
          />
        )}
      </div>
    );
  }
}

ListElement.propTypes = propTypes;
ListElement.defaultProps = defaultProps;

export default ListElement;
