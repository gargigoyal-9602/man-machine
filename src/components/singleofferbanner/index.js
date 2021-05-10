import parse from 'html-react-parser';

import commands from '../../commands';
import './css/index.scoped.css';

/*
function SingleOfferBanner() {
  const BackgroundImage = SingleBgImg;
  var ImageOne = {
    backgroundImage: `url(${BackgroundImage})`,
  };
  const history = useHistory();
  return (
    <div className="yt-single-offer-component" style={ImageOne}>
      <img
        src={require("./images/285489-P695ML-200.png")}
        className="img-fluid d-none d-sm-block"
      />
      <div className="yt-soc-inner-content">
        <Container>
          <div className="yt-sb-inner-wrap">
            <h2 className="yt-soc-title mb-4 mt-0">
              Don’s Miss Best Offers on Islamic Cloths
            </h2>
            <p className="yt-soc-offer mb-0">Upto 30% off</p>
            <Button
              color="secondary yt-soc-btn py-3"
              onClick={() => history.push("/shop")}
            >
              Shop Now
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}*/

function SingleOfferBanner() {
  let banners = commands.cache.getPositionedBanners({ position: 4 });

  return banners.map((item) => parse(item.content + '<br />'));
}

export default SingleOfferBanner;
