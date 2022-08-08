import { render } from "@testing-library/react";
import React from "react";

type ButtonProps = {
  text: string,
  disabled: boolean
}

function Button(props: ButtonProps) {
  return (
    <div className="btn-section">
      <button className="btn" disabled={props.disabled}>{props.text}</button>
    </div>
  )
}

export default Button