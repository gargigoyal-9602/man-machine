import React from 'react';
import './css/index.scoped.css';
import { Footer, Header, LoginComponent } from '../../components';

function LoginPage(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <LoginComponent className="main-login-page" />
      <Footer />
    </div>
  );
}
export default LoginPage;
