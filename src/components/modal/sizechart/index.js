import React from 'react';
import './css/index.scoped.css';
// import { Formik, Form, Field } from "formik";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function SizeChartModal(props) {
  console.log('Images ', props.images);
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        toggle={props.toggle}
        centered={true}
        className="cm-small-modal-6"
      >
        <ModalHeader toggle={props.toggle} className="size-chart-title-bar p-4">
          <span>Size Chart</span>
        </ModalHeader>
        <ModalBody className="py-4 px-5 yt-add-modal-body">
          <div class="body-container">
            {props.images?.map((item) => (
              <div class="ad-addr-body-wrap text-center mb-3">
                <img src={item.image || '#null'} className="img-fluid w-100" />
              </div>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default SizeChartModal;
{
  /* <FormGroup className="yt-number-filed">
<div class="profile-form-field fields-active error">
  <span class="profile-form-tag">Pin Code</span>
  <Input
    className="py-2 "
    type="number"
    name="phoneno"
    id="phoneno"
  />
</div>
</FormGroup> */
}
