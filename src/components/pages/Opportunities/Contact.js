import React from 'react';
import "./Contact.css";
import ContactForm from '../../parts/ContactForm/ContactForm';
import { Header, Segment } from 'semantic-ui-react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact__main-page-wrapper">
        <div raised className="contact__title-header-container">
          <Header className="contact__title-header">Contact Us</Header>
        </div>
        <ContactForm />
      </div>
    )
  }
}

export default Contact;