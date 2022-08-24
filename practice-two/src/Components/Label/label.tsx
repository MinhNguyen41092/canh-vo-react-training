import React from "react";

function Label(props: any) {
  return (
    <label className="form-label" htmlFor={props.htmlFor}>{props.text}</label>
  )
}

export default Label