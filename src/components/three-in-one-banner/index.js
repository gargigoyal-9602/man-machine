import parse from 'html-react-parser';

import commands from '../../commands';
import './css/index.scoped.css';

/*
function ThreeInOneBanner() {
  const BackgroundOne = OneImg;
  const BackgroundTwo = TwoImg;
  const BackgroundThree = ThreeImg;
  var ImageOne = {
    backgroundImage: `url(${BackgroundOne})`,
  };
  var ImageTwo = {
    backgroundImage: `url(${BackgroundTwo})`,
  };
  var ImageThree = {
    backgroundImage: `url(${BackgroundThree})`,
  };
  const history = useHistory();
  return (
    <section className="my-3">
      <div className="shopnow yt-three-promo-main">
        <div className="yt-cm-three-main-row d-flex flex-wrap">
          <div className="yt-cm-three-col">
            <div className="yty-bg-3banner" style={ImageOne}>
              <div className="yt-3banner-wrapper yt-full-width">
                <h2 className="yt-3banner-title">
                  SAVE 5% <span>on every order!</span>
                </h2>
                <h4 className="yt-3banner-sub-title">Luxury Kaftans</h4>
                <span className="yt-3banner-divider yt-first-divider" />
                <Button
                  color="secondary yt-3banner-sp-btn py-3"
                  onClick={() => history.push("/shop")}
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="yt-first-bottom-banner" style={ImageTwo}>
              <div className="yt-3banner-wrapper yt-top-2">
                <h2 className="yt-3banner-title my-0">Welcome,</h2>
                <h2 className="yt-3banner-title my-0">
                  to the world of modest wear
                </h2>
                <h4 className="yt-3banner-sub-title">Check top products</h4>
                <span className="yt-3banner-divider yt-second-divider" />
                <Button
                  color="secondary yt-3banner-sp-btn py-3"
                  onClick={() => history.push("/shop")}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
          <div className="yt-cm-three-col yt-cm-bg-col" style={ImageThree}>
            <div className="yt-3banner-last-wrap">
              <div className="yt-3banner-big-title">
                Fashion and Trend come together
              </div>
              <div className="yt-3banner-big-sub-title">Upto 30% off</div>
              <span className="yt-3banner-big-divider yt-third-divider" />
              <Button
                color="secondary yt-3banner-sp-btn py-3"
                onClick={() => history.push("/shop")}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

function ThreeInOneBanner() {
  let banners = commands.cache.getPositionedBanners({ position: 2 });

  return banners.map((item) => parse(item.content + '<br />'));
}

export default ThreeInOneBanner;
