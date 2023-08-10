import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../../UI/Overlay/Overlay";
import Window from "../../UI/Window/Window";
import ButtonSet from "../../UI/ButtonSet/ButtonSet";
import Button from "../../UI/Button";
import "./ErrorModal.css";

function ErrorModal({ headerText, messageText, onClick }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onClick={onClick} className="error-wrapper" />,
        document.getElementById("overlay-root")
      )}

      {ReactDOM.createPortal(
        <Window className="error-modal error-wrapper">
          <h4 className="error-header">{headerText}</h4>
          <p className="error-message">{messageText}</p>
          <ButtonSet>
            <Button className="button" onClick={onClick}>
              Хорошо
            </Button>
          </ButtonSet>
        </Window>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ErrorModal;
