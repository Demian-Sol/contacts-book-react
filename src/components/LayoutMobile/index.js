import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './LayoutMobile.module.css';
import CompleteContactsList from '../CompleteContactsList';
import SearchForm from '../SearchForm';
import ContactForm from '../ContactFormMobile';

const propTypes = {
  listDataAll: PropTypes.array,
  listDataFavorite: PropTypes.array,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  toggleFavorite: PropTypes.func,
  setContactId: PropTypes.func,
  updateContact: PropTypes.func,
  displayedContact: PropTypes.object,
};
const defaultProps = {
  listDataAll: [],
  listDataFavorite: [],
  searchValue: '',
  setSearchValue: () => null,
  toggleFavorite: () => null,
  setContactId: () => null,
  updateContact: () => null,
};

class LayoutMobile extends Component {
  state = {
    isModalOpen: false,
  }

  handleClose = () => {
    this.setState({ isModalOpen: false });
  }

  handleOpen = () => {
    this.setState({ isModalOpen: true });
  }

  handleIdPassing = id => {
    const { setContactId } = this.props;

    setContactId(id);
    this.handleOpen();
  }

  render() {
    const {
      listDataAll,
      listDataFavorite,
      setSearchValue,
      searchValue,
      displayedContact,
      updateContact,
      toggleFavorite,
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div className={styles.layoutMobile}>
        <Modal
          open={isModalOpen}
          onClose={this.handleClose}
        >
          <DialogContent>
            {displayedContact !== null
            && (
              <ContactForm
                displayedContact={displayedContact}
                updateContact={updateContact}
                onClose={this.handleClose}
              />
            )}
          </DialogContent>
        </Modal>
        <SearchForm
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <CompleteContactsList
          listDataAll={listDataAll}
          listDataFavorite={listDataFavorite}
          setContactId={this.handleIdPassing}
          toggleFavorite={toggleFavorite}
        />
      </div>
    );
  }
}

LayoutMobile.propTypes = propTypes;
LayoutMobile.defaultProps = defaultProps;

export default LayoutMobile;
