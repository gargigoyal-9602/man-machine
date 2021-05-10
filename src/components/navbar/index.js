import React from 'react';
import { Row } from 'reactstrap';
import { useHistory } from 'react-router';
import './css/index.scoped.css';

const Navigate = () => {
  const history = useHistory();

  return (
    <div>
      <div>
        <img
          src={require('./images/navimage.png')}
          class="navimage"
          alt="man and machine"
        />
      </div>
      <Row>
        <div class="shopnow w3-ripple" onClick={() => history.push('/shop')}>
          Shop Now
        </div>
      </Row>
    </div>
  );
};

export default Navigate;
