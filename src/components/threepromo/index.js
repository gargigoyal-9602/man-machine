import parse from 'html-react-parser';

import commands from '../../commands';
import './css/index.scoped.css';

/*
function ThreePromo() {
  const history = useHistory();
  return (
    <section className="yt-theme-promo-component mt-5 mb-5">
      <Container>
        <Row className="yt-cm-thr-pro-row">
          <Col xs={12} sm={3} lg={3} className="yt-cm-col">
            <img
              src={require("./images/raamin-ka-IvspK72hb2k-unsplash.png")}
              className="promo-3-img img-fluid"
              alt="Man and Machine"
            />
            <div className="promo-3-botom-info d-flex align-items-center justify-content-between px-4">
              <div className="promot-3-title">Hijab</div>
              <Button
                color="secondary promot-3-btn py-3"
                onClick={() => history.push("/shop")}
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={6} className="promo-3-col yt-cm-col">
            <img
              src={require("./images/m-t-elgassier-2OwC0tesaL8-unsplash.png")}
              className="promo-3-img img-fluid"
              alt="Man and Machine"
            />
            <div className="promo-3-botom-info d-flex align-items-center justify-content-between px-4">
              <div className="promot-3-title">Modern Dresses</div>
              <Button
                color="secondary promot-3-btn py-3"
                onClick={() => history.push("/shop")}
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={3} lg={3} className="yt-cm-col">
            <img
              src={require("./images/dharma-saputra-nj-E1pQ5A24-unsplash.png")}
              className="promo-3-img img-fluid"
              alt="Man and Machine"
            />
            <div className="promo-3-botom-info d-flex align-items-center justify-content-between px-4">
              <div className="promot-3-title">Islamic Clothing</div>
              <Button
                color="secondary promot-3-btn py-3"
                onClick={() => history.push("/shop")}
              >
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
*/

function ThreePromo() {
  let banners = commands.cache.getPositionedBanners({ position: 3 });

  return banners.map((item) => parse(item.content + '<br />'));
}
export default ThreePromo;
