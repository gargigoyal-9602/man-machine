import React, { useState, useEffect } from 'react';

import { Footer, Header, OrderDetailsPage } from '../../components';
import commands from '../../commands';

import './css/index.scoped.css';

function OrderDetailPage(props) {
  const [trackingDetails, setTrackingDetails] = useState();
  const orderItem = props.location?.state?.item;
  const order = props.location?.state?.order;
  // const orderId = props.match?.params?.orderId;

  useEffect(() => {
    fetchOrder();
  }, []);

  function fetchOrder() {
    if (order) {
      if (order.logistics_ship_rocket_enabled) {
        commands.orders.getTrackingDetails(
          (data) => onLogisticSuccess(data),
          () => {},
          order.id,
          undefined
        );
      } else {
        commands.orders.getTrackingDetails(
          (data) => onSuccess(data),
          () => {},
          undefined,
          orderItem.id
        );
      }
      console.log('order ', order);
    }
  }
  function onSuccess(data) {
    // console.log("order data", data);
    setTrackingDetails(data);
  }

  function onLogisticSuccess(data) {
    let trackingDetails = {};
    let trackingResponse = data.tracking;
    trackingDetails['status'] = trackingResponse.status;
    trackingDetails['msg'] = trackingResponse.msg;
    trackingDetails['order_datetime'] = trackingResponse.order_datetime;
    trackingDetails['tracking_number'] = trackingResponse.tracking_number;
    trackingDetails['order_date'] = trackingResponse.order_date;
    setTrackingDetails(trackingDetails);
  }

  return (
    <div>
      <Header onProps={props} />
      {/*<HeroBanner />*/}
      <OrderDetailsPage
        orderItem={orderItem}
        order={order}
        trackingDetails={trackingDetails}
        refetchData={fetchOrder}
      />

      <Footer />
    </div>
  );
}
export default OrderDetailPage;
