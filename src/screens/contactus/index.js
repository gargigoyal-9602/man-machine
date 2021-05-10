import React from 'react';
import './css/index.scoped.css';
import { Header, Footer, ContactForm } from '../../components';

function ContactUs(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}

      <ContactForm />

      <Footer />
    </div>
  );
}

export default ContactUs;
