import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './css/index.scoped.css';

function UserNotifyMe() {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  return (
    <div class="cm-main-modal-wrapper">
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="cm-small-modal-4"
        centered={true}
        modalClassName="popopop"
      >
        <ModalHeader toggle={toggle} className="notify-me-title-bar  border-0">
          <span>Request Processed</span>
        </ModalHeader>
        <ModalBody className="py-4">
          <div class="text-left notify-me-body-text p-3">
            You’ll now be notified once the product is back in stock.
          </div>
        </ModalBody>
        <ModalFooter className="notify-me-bottom-bar p-1 d-flex">
          <Button
            color="secondary pp-notify-me-btn-modal p-3"
            onClick={toggle}
            block
          >
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default UserNotifyMe;
