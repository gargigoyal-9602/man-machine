import commands from '../../commands';
import parse from 'html-react-parser';
import PositionOne from './position1';
import PositionTwo from './position2';
import PositionThree from './position3';

function Banners(props) {
  let banners = commands.cache.getPositionedBanners({
    position: props.position,
  });

  if (!(banners.length > 0)) {
    return null;
  } else {
    if (props.position === 1) {
      banners[0].content = PositionOne();
    } else if (props.position === 2) {
      banners[0].content = PositionTwo();
    } else if (props.position === 3 || true) {
      banners[0].content = PositionThree();
    }

    return parse(addImages(banners[0]));
  }
}

function addImages(banner) {
  if (banner?.images?.length > 0) {
    let content = banner.content || '';

    banner.images?.forEach((image) => {
      content = content
        .split(`{{img-${image.position || 0}}}`)
        .join(image.image);
      content = content
        .split(`{{img-url-${image.position || 0}}}`)
        .join(image.url);
    });

    return content;
  } else {
    return banner.content || '';
  }
}

export default Banners;
