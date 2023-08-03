import React from 'react';
import './ContactUs.css';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <p>We would love to hear from you! To reach out to us, you can leave a comment on our videos or you can fill out the form below to email us!</p>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
