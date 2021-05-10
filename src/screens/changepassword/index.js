import React from 'react';

import { ChangePasswordComponent, Header, Footer } from '../../components';
import './css/index.scoped.css';

function ChangePasswordPage(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <ChangePasswordComponent />
      <Footer />
    </div>
  );
}
export default ChangePasswordPage;
