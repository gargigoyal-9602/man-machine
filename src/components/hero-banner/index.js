import React from "react";
import { Button } from "reactstrap";
import commands from "../../commands";
import "./css/index.scoped.css";

function HeroBanner() {
  const mybanner = commands.cache.getWebPositionedBanners({ position: 1 })

  const BackgroundHead = mybanner[0]?.images[0].image;

  const ImageHead = {
    backgroundImage: `url(${BackgroundHead})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
  };
  return (

    <section className="my-3" style={ImageHead}>
      <div className="yty-bg-3banner">
        <div className="banner-wrapper yt-full-width">
          <h2 className="yt-3banner-title text-uppercase">
            {mybanner[0]?.images[0]?.title}
          </h2>
          <h4 className="yt-3banner-sub-title">

            {mybanner[0]?.images[0]?.subtitle}
          </h4>

          <Button
            color="secondary yt-3banner-sp-btn py-3"
            onClick={() => window.location.href = mybanner[0]?.images[0]?.url}
          // onClick={() => history.push("/shop")}
          >
            Shop Now
              </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
