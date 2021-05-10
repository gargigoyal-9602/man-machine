import React from 'react';
import { Footer, Header, ForgotPasswordComponent } from '../../components';

function ForgotPassword(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <ForgotPasswordComponent />
      <Footer />
    </div>
  );
}
export default ForgotPassword;
