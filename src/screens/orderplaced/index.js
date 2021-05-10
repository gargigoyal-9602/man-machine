import React from 'react';

import { OrderPlaced, Footer, Header } from '../../components';

import './css/index.scoped.css';

function OrderPlacedPage(props) {
  return (
    <>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <OrderPlaced />

      <Footer />
    </>
  );
}
export default OrderPlacedPage;
