import React from 'react';
import { Container, Button } from 'reactstrap';

import './css/index.scoped.css';

function ErrorOccuredBlock(props) {
  return (
    <>
      <section>
        <Container>
          <div class="trans-fl-pg-inner-wrap p-4 bg-white radius-10 trans-fl-pg-mb-80 mt-5">
            <div class="cart-pg-empty-main-wrap text-center py-5">
              <img
                src={require('./images/transactionfailed-icn.png')}
                className="img-fluid yt-transaction-cl-icn"
                width="170"
                height="212"
              />
              <div class="trans-fl-wrap ">
                <h2 class="trans-fl-ttl my-3">
                  {props.title ? props.title : 'Oh Noes!, Error Occured'}
                </h2>
                <p class="trans-fl-text mb-0">
                  {props.message ? props.message : 'Your order was declined!'}
                </p>
              </div>
              <Button
                color="secondary trans-fl-btn py-3 px-5 mt-3"
                onClick={props.onButtonPress}
              >
                {props.buttonText ? props.buttonText : 'Go to Home'}
              </Button>
              <div class="mt-2" style={{ opacity: 0 }}>
                <Button color="link trans-fl-cancel-btn">
                  Cancel transaction?
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
export default ErrorOccuredBlock;
