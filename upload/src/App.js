import React, { useState } from "react";
import { Translate } from "react-localize-redux";
import {
  Alert,
  Button,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Popup from "./popup";
const App = (props) => {
  const closeModal = () => {
    props.onClose();
  };
  const [result, setResult] = useState({ status: "", message: "" });
  const [isShowModal, setIsShowModal] = useState(false);
  const [operation, setOperation] = useState({
    value: props.operationCode ? props.operationCode : "",
    invalid: false,
    message: "",
  });

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const onSetDeviceOperation = () => {
    // Perform the action for setting the device operation
    // Assuming the necessary implementation here
  };

  const changeOperationConfirm = (
    // Assuming the content of the confirmation popup here
    <div>
      {/* Content of the confirmation popup */}
    </div>
  );

  const closeResult = () => {
    setResult({ status: "", message: "" });
  };

  const onValidateDevice = () => {
    // Assuming the onValidateDevice function implementation
  };

  const onChangeOperationDevice = (event) => {
    setOperation({
      ...operation,
      value: event.target.value,
    });
  };
  return (
    <>
      <h1>helloooshkfg</h1>
      <Label>
        helloo
      </Label>
      <Modal>
        <ModalHeader>
          dfhdfghj
        </ModalHeader>
        <ModalBody>
          gfdyuesrtuhjnrtghj
        </ModalBody>
        <ModalFooter>
          fxhfdghdftgh
        </ModalFooter>
      </Modal>
      <Popup
        title={"hello"}
        content={changeOperationConfirm}
        toggle={toggleModal}
        isOpen={isShowModal}
        type="confirm"
        actionCancel={toggleModal}
        actionOK={onSetDeviceOperation}
        labelCancel={"cancel"}
      />
    </>
  );
};
export default App