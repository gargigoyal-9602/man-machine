import parse from 'html-react-parser';
import commands from '../../commands';

import './css/index.scoped.css';

/*
function DoubleOfferBanner() {
  const history = useHistory();
  return (
    <section className="yt-double-offer-component">
      <Container>
        <Row className="yt-cm-db-row">
          <Col sm={12} sm={6} lg={6} className="yt-cm-col">
            <div className="yt-doc-inner mb-4 mb-lg-0 ">
              <img
                src={require("./images/offer-1.png")}
                className="img-fluid three"
                alt="Man and Machine"
              />
              <div className="yt-doc-box">
                <div className="yt-doc-tag">Hurry Up!</div>
                <div className="yt-doc-daily">Daily Deal Of The Day</div>
                <div className="yt-doc-price-tagline">
                  Low prices on 1000+ products every day
                </div>
                <Button
                  color="secondary yt-doc-btn py-3"
                  onClick={() => history.push("/shop")}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={12} sm={6} lg={6} className="yt-cm-col">
            <div className="yt-doc-inner">
              <img
                src={require("./images/offer-2.png")}
                className="img-fluid three"
                alt="Man and Machine"
              />
              <div className="yt-doc-box">
                <div className="yt-doc-tag yt-small-tag">Happy Times!</div>
                <div className="yt-doc-daily-2">Flat 30% Off</div>
                <Button
                  color="secondary yt-doc-btn py-3"
                  onClick={() => history.push("/shop")}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}*/

function DoubleOfferBanner() {
  let banners = commands.cache.getPositionedBanners({ position: 5 });

  return banners.map((item) => parse(item.content + '<br />'));
}

export default DoubleOfferBanner;
