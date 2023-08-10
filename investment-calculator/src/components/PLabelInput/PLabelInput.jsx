import React from "react";

function PLabelInput(props) {
  const uid = () =>
    String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    );

  const cuid = uid();

  return (
    <p>
      <label htmlFor={cuid}>{props.children}</label>
      <input
        type="number"
        id={cuid}
        ref={props.inputRef}
        step={props.inputStep || 1}
      />
    </p>
  );
}

export default PLabelInput;
