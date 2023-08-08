import React from "react";

function PLabelInput(props) {
  return (
    <p>
      <label htmlFor={props.id}>{props.children}</label>
      <input type="number" id={props.id} ref={props.ref} />
    </p>
  );
}

export default PLabelInput;
