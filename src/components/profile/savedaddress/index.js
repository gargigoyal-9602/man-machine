import React from 'react';

import ExistAddress from './ExistAddress';
import './css/index.scoped.css';

function SavedAddress(props) {
  console.log(props);

  return (
    <>
      <ExistAddress onProps={props} />{' '}
    </>
  );
}
export default SavedAddress;
