import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { AllModal } from '../../components';
import './css/index.scoped.css';

function FavouriteProductSet(props) {
  const [ShowWLModal] = useState(false);
  return (
    <>
      {ShowWLModal ? <AllModal modalName="removewhishlist" /> : ''}
      {props.isFav ? (
        <FaHeart
          className="yt-sglproduct-fav active"
          onClick={() => props.onClick()}
        />
      ) : (
        <FaRegHeart
          className="yt-sglproduct-fav"
          onClick={() => props.onClick()}
        />
      )}
    </>
  );
}
export default FavouriteProductSet;
