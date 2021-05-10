import React from 'react';
import { Footer, Header, CartPageComponent } from '../../components';

import './css/index.scoped.css';

function CartPage(props) {
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <CartPageComponent />

      <Footer />
    </div>
  );
}
export default CartPage;
