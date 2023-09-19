// FIXME: Source code quality issues by 'DEVICE-LINK'
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

const Popup = ({
  type,
  title,
  content,
  isOpen,
  labelOK,
  labelCancel,
  classes,
  toggle,
  actionOK,
  actionCancel,
  isDisable,
  isDanger,
}) => {
  let color
  if (isDanger)
    color = "danger"
  else
    color = "primary"
  
  let buttonActions = (
    <>
      <Button color="secondary" onClick={actionCancel || toggle}>
        {labelCancel}
      </Button>
      <Button color={color} onClick={actionOK} disabled={isDisable}>
        {labelOK || "OK"}
      </Button>{" "}
    </>
  );

  if (type === "message") {
    buttonActions = (
      <Button color="primary" onClick={actionOK || toggle}>
        {labelOK}
      </Button>
    );
  }
  return (
    <Modal isOpen={isOpen} className={classes}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>{buttonActions}</ModalFooter>
    </Modal>
  );
};

Popup.propTypes = {
  type: PropTypes.oneOf(["message", "confirm"]),
  title: PropTypes.any,
  content: PropTypes.any.isRequired,
  // FIXME: Source code quality issues by 'DEVICE-LINK'
  // eslint-disable-next-line react/require-default-props
  isOpen: PropTypes.bool.isRequired,
  // FIXME: Source code quality issues by 'DEVICE-LINK'
  // eslint-disable-next-line react/no-unused-prop-types
  isDisable: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  labelOK: PropTypes.any,
  labelCancel: PropTypes.any,
  classes: PropTypes.string,
  actionOK: PropTypes.func,
  actionCancel: PropTypes.func,
  isDanger: PropTypes.bool,
};

Popup.defaultProps = {
  type: "message",
  title: "",
  // FIXME: Source code quality issues by 'DEVICE-LINK'
  // eslint-disable-next-line react/default-props-match-prop-types
  isOpen: false,
  labelOK: "OK",
  labelCancel: "Cancel",
  actionOK: null,
  actionCancel: null,
  classes: "",
};

export default Popup;
