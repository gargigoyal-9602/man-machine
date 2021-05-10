import React, { useEffect, useState } from 'react';
import './css/index.scoped.css';
import { Header, Footer, AboutUsReviews } from '../../components';
import { Container } from 'reactstrap';
import commands from '../../commands';
import parse from 'html-react-parser';

function AboutUs(props) {
  const [content, setContent] = useState();

  useEffect(() => {
    if (content === undefined) {
      commands.pages
        .getAboutUs()
        .then((res) => {
          setContent(parse(res));
        })
        .catch((err) => {
          setContent(<div>No Content Available</div>);
        });
    }
  }, []);
  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <section className="yt-about-us-pg">
        {content && (
          <Container>
            <div className="yt-cm-mobile-bread">
              <div className="pageroute profile-pg-breadcrumbs">
                <span className="profile-pg-home">Home {'>'}</span>{' '}
                <span className="">About Us</span>
              </div>
              <h2 className="yt-profile-mb-ttl profile-pg-title">About Us</h2>
            </div>

            <div class="cardcontainer yt-main-wrapper border-radius-10 bg-white">
              <div class="customcard yt-inner-wrap">{content}</div>
            </div>
          </Container>
        )}
      </section>
      <AboutUsReviews />
      <div className="mt-5" />
      <Footer />
    </div>
  );
}
export default AboutUs;
