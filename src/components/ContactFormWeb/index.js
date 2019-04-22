import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './ContactForm.module.css';

const propTypes = {
  displayedContact: PropTypes.object.isRequired,
  onClose: PropTypes.func, // used in conditional rendering, no need for default
  updateContact: PropTypes.func,
};
const defaultProps = {
  updateContact: () => null,
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    const { displayedContact } = props;

    this.state = {
      contactData: displayedContact,
      isDirty: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { displayedContact } = this.props;

    if (prevProps.displayedContact.id !== displayedContact.id) {
      this.setState({ contactData: displayedContact, isDirty: false });
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    if (name === 'company') {
      const newState = update(this.state, {
        contactData: { company: { name: { $set: value } } },
        isDirty: { $set: true },
      });
      return this.setState(newState);
    }
    const newState = update(this.state, {
      contactData: { [name]: { $set: value } },
      isDirty: { $set: true },
    });
    return this.setState(newState);
  };

  handleSubmit = event => {
    const { updateContact } = this.props;
    const { contactData } = this.state;

    event.preventDefault();
    updateContact(contactData);
    return this.setState({ isDirty: false });
  }

  render() {
    const {
      contactData: { avatar, name, username, email, phone, website, company }, isDirty,
    } = this.state;
    const { onClose } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={styles['contact-form']}>
        <div className={styles['img-frame']}>
          <img src={avatar} alt="avatar" />
        </div>
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={name}
          label="name"
          name="name"
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={avatar}
          label="avatar"
          name="avatar"
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={username}
          label="username"
          name="username"
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={email}
          label="email"
          name="email"
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={phone}
          label="phone"
          name="phone"
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={website}
          label="website"
          name="website"
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={company.name}
          label="company"
          name="company"
          className={styles['form-field']}
        />
        <div className={styles['buttons-bin']}>
          <Button type="submit" disabled={!isDirty}>
            { 'Change' }
          </Button>
          { onClose
          && (
          <Button type="button" onClick={onClose}>
            { 'Close' }
          </Button>
          )}
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
