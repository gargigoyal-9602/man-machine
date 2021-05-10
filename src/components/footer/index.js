import React from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import langg from '../../language';
import './css/index.scoped.css';

function Footer() {
  const history = useHistory();
  const lang = new langg('footer');
  const routeToAll = (value) => {
    if (value !== undefined) {
      let path = '/' + value;
      window.scrollTo(0, 0);
      history.push(path);
    } else {
      let path = '/';
      window.scrollTo(0, 0);
      history.push(path);
    }
  };
  const routeHelpCenter = (value) => {
    if (value !== undefined) {
      let path = '/help-center/' + value;
      window.scrollTo(0, 0);
      history.push(path);
    } else {
      let path = '/help-center';
      window.scrollTo(0, 0);
      history.push(path);
    }
  };
  return (
    <footer>
      <div className="footercontainer yt-main-footer">
        <Container>
          <Row className="justify-content-between yt-main-footer-row">
            <Col xs={12} sm={7} lg={5} className="yt-col yt-first-col">
              <div className="d-flex">
                <div
                  className="logobox w3-ripple"
                  onClick={() => history.push('/')}
                >
                  <img
                    src={require('./images/Logo@3x.png')}
                    className="logoimage"
                    alt="man and machine"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div className=" yt-text-about">
                  {lang.get(
                    'description',
                    `Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s`
                  )}
                </div>
              </div>
              <div className="d-flex">
                <div className="social_all">
                  <a href="https://www.facebook.com/" target="_blank">
                    <img
                      src={require('./images/facebook.png')}
                      className="social_logos w3-ripple"
                      alt="social"
                    />
                  </a>{' '}
                  |
                  <a href="https://www.instagram.com/" target="_blank">
                    <img
                      src={require('./images/instagram.png')}
                      className="social_logos w3-ripple"
                      alt="social"
                    />
                  </a>{' '}
                  |
                  <a href="https://www.google.com/" target="_blank">
                    <img
                      src={require('./images/search.png')}
                      className="social_logos w3-ripple"
                      alt="social"
                    />
                  </a>{' '}
                  |
                  <a href="https://twitter.com/" target="_blank">
                    <img
                      src={require('./images/twitter.png')}
                      className="social_logos w3-ripple"
                      alt="social"
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={5} lg={2} className="yt-foote-link-col yt-col">
              <div className="yt-footer-widget-title text-nowrap">
                {lang.get('useful_links', 'Useful Links')}
              </div>
              <div className="yt-footler-menu-links">
                <div
                  className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeToAll('aboutus');
                  }}
                >
                  {lang.get('about_us', 'About Us')}
                </div>
                <div
                  className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeHelpCenter(
                      'Delivery, Cancellation, Refunds & Returns'
                    );
                  }}
                >
                  {lang.get('delivery_and_returns', 'Delivery & Returns')}
                </div>
                {/*
                <div className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeHelpCenter("Site Map");
                  }}
                >{lang.get("site_map", "Site Map")}</div>
                */}
                <div
                  className="yt-ftr-link avitem w3-ripple text-nowrap"
                  onClick={() => {
                    routeToAll('contactus');
                  }}
                >
                  {lang.get('contact_us', 'Contact Us')}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={5} lg={2} className="yt-foote-link-col yt-col">
              <div className="yt-footer-widget-title">
                {lang.get('quick_links', 'Quick Links')}
              </div>
              <div className="yt-footler-menu-links">
                <div
                  className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeHelpCenter();
                  }}
                >
                  {lang.get('help_center', 'Help Centers')}
                </div>
                <div
                  className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeHelpCenter('Frequently Asked Questions');
                  }}
                >
                  {lang.get('faq', "FAQ's")}
                </div>
                <div
                  className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeHelpCenter('Terms and Conditions');
                  }}
                >
                  {lang.get('t_and_c', 'Terms & Conditions')}
                </div>
                <div
                  className="yt-ftr-link w3-ripple text-nowrap"
                  onClick={() => {
                    routeHelpCenter('Privacy Policy');
                  }}
                >
                  {lang.get('privacy_policy', 'Privacy Policy')}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={5} lg={3} className="yt-col yt-last-col">
              <div className="yt-footer-widget-title">
                {lang.get('promotions', 'Special Offer & Newletter')}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="emailinput"
                />
                <Button className="emailbutton" size="md">
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottombar">
        <Container>
          <p className="m-0 yt-copyright-text">
            {lang.get(
              'copyrights',
              'Copyright © 2020 Man&Machine, USA. All rights reserved.'
            )}
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
