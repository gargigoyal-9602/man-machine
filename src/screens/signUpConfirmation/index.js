import React from 'react';

import { Footer, Header } from '../../components';
import SignUpConfirmComponent from '../../components/signup-confirm-account/index';

function SignUpConfirm(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <SignUpConfirmComponent />
      <Footer />
    </div>
  );
}
export default SignUpConfirm;
