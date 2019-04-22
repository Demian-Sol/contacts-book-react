import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './ContactFormMobile.module.css';
import { TRANSLATIONS } from '../../constants';

const propTypes = {
  displayedContact: PropTypes.object.isRequired,
  onClose: PropTypes.func,
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

    if (name === TRANSLATIONS.FORM_LABELS.COMPANY) {
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
    const { FORM_LABELS } = TRANSLATIONS;

    return (
      <form onSubmit={this.handleSubmit} className={styles['contact-form']}>
        {onClose && (
          <button type="button" onClick={onClose} className={styles['cross-button']}>
            {'X'}
          </button>
        )}
        <div className={styles['img-frame']}>
          <img src={avatar} alt="avatar" />
        </div>
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={name}
          label={FORM_LABELS.NAME}
          name={FORM_LABELS.NAME}
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={avatar}
          label={FORM_LABELS.AVATAR}
          name={FORM_LABELS.AVATAR}
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={username}
          label={FORM_LABELS.USERNAME}
          name={FORM_LABELS.USERNAME}
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={email}
          label={FORM_LABELS.EMAIL}
          name={FORM_LABELS.EMAIL}
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={phone}
          label={FORM_LABELS.PHONE}
          name={FORM_LABELS.PHONE}
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={website}
          label={FORM_LABELS.WEBSITE}
          name={FORM_LABELS.WEBSITE}
          className={styles['form-field']}
        />
        <TextField
          onChange={this.handleChange}
          margin="normal"
          value={company.name}
          label={FORM_LABELS.COMPANY}
          name={FORM_LABELS.COMPANY}
          className={styles['form-field']}
        />
        <div className={styles['buttons-bin']}>
          <Button type="submit" disabled={!isDirty}>
            {TRANSLATIONS.FORM_BUTTON_CHANGE}
          </Button>
          {onClose && (
            <Button type="button" onClick={onClose}>
              {TRANSLATIONS.FORM_BUTTON_CLOSE}
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
