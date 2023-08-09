import React from 'react';
import LoaderImage2 from '@assets/images/loader2';
import { Modal, ModalBody } from 'reactstrap';

const Loader = () => {
  return (
    <div>
      <Modal isOpen className="vulHuntLoader" keyboard={false} centered>
        <ModalBody className="row justify-content-center">
          <img src={LoaderImage2} alt="Icon menu" width={150} heigth={150} />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Loader;
