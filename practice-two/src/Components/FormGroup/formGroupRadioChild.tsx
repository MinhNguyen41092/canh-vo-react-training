import React from "react";
import Label from "../Label/label";
import Input from "../Input/input";

function FormGroupRadioChild(props: any) {
  const {
    labelHeading, 
    idInput,
    name,
    value,
    checked,
    handleInput,
    labelText,
    htmlFor
  } = props

  return (
    <div className="form-group">
      <Label 
        text={labelHeading}
      />
      <div className="form-input">
        <div className="input-group">
          <Input 
            type="radio"
            id={idInput[0]}
            name={name}
            value={value[0]}
            checked={checked[0]}
            className="input radio-input"
            handleInput={handleInput}
          />
          <Label 
            text={labelText[0]}
            htmlFor={htmlFor[0]}
          />
        </div>
        <div className="input-group">
          <Input 
            type="radio"
            id={idInput[1]}
            name={name}
            value={value[1]}
            checked={checked[1]}
            className="input radio-input"
            handleInput={handleInput}
          />
          <Label 
            text={labelText[1]}
            htmlFor={htmlFor[1]}
          />
        </div>
      </div>
    </div>
  )
}

export default FormGroupRadioChild