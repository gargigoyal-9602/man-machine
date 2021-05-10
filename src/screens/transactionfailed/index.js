import React from 'react';
import {
  TransactionFailedComponent,
  Footer,
  Header,
  AppStoreBanner,
  SingleOfferBanner,
  DoubleOfferBanner,
} from '../../components';

import './css/index.scoped.css';

function TransactionFailedPage(props) {
  console.log(props);
  return (
    <>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <TransactionFailedComponent />
      {/* Singel Offer Banner */}
      <SingleOfferBanner />
      {/* Singel Offer End */}

      {/* Double Offer */}
      <section className="my-4">
        <DoubleOfferBanner />
      </section>
      {/* Double Offer End */}

      {/* App Store Banner */}
      <AppStoreBanner />
      {/* App Store Banner End*/}
      <Footer />
    </>
  );
}
export default TransactionFailedPage;
