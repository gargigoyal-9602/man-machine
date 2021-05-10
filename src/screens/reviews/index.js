import React, { useEffect, useState } from 'react';
import './css/index.scoped.css';
import {
  Header,
  Footer,
  AboutUsReviews,
  SingleOfferBanner,
  DoubleOfferBanner,
  AppStoreBanner,
} from '../../components';
import commands from '../../commands';
import parse from 'html-react-parser';

function Reviews(props) {
  // console.log("About us");

  const [content, setContent] = useState();

  useEffect(() => {
    if (content === undefined) {
      commands.pages.getAboutUs().then((res) => {
        setContent(parse(res));
      });
    }
  }, []);
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <AboutUsReviews />
      {/* Singel Offer Banner */}
      <SingleOfferBanner />
      {/* Singel Offer End */}

      {/* Double Offer */}
      <DoubleOfferBanner />
      {/* Double Offer End */}

      {/* App Store Banner */}
      <AppStoreBanner />
      {/* App Store Banner End*/}
      <Footer />
    </div>
  );
}

function Item(props) {
  return (
    <div class="yt-items item">
      <div class="item-title">{props.title}</div>
      <div class="item-details">{props.details}</div>
    </div>
  );
}

export default Reviews;
