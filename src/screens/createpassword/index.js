import React from 'react';
import { Footer, Header, CreatePasswordComponent } from '../../components';
function CreatePassword(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <CreatePasswordComponent />
      <Footer />
    </div>
  );
}
export default CreatePassword;
