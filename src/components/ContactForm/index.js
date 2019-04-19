import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update, { set } from 'immutability-helper';
import styles from './ContactForm.module.css';

const propTypes = {
  displayedContact: PropTypes.object.isRequired,
};
const defaultProps = {

};

class ContactForm extends Component {
  state = {
    contactData: {
      avatar: '',
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      company: {},
    },
    isDirty: false,
  };

  componentDidMount() {
    const { displayedContact } = this.props;
    this.setState({ contactData: displayedContact });
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
    return (
      <form onSubmit={this.handleSubmit} className={styles.ContactForm}>
        <img src={avatar} alt="avatar" />
        <input onChange={this.handleChange} type="text" value={name} name="name" />
        <input onChange={this.handleChange} type="url" value={avatar} name="avatar" />
        <input onChange={this.handleChange} type="text" value={username} name="username" />
        <input onChange={this.handleChange} type="email" value={email} name="email" />
        <input onChange={this.handleChange} type="text" value={phone} name="phone" />
        <input onChange={this.handleChange} type="text" value={website} name="website" />
        <input onChange={this.handleChange} type="text" value={company.name} name="company" />
        <button type="submit" disabled={!isDirty}>
          Change
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
