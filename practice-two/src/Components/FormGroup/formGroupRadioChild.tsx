import React from "react";
import Label from "../Label/label";
import Input from "../Input/input";

interface FormGroupRadioChildProps {
  labelHeading: string
  labelClassname: string 
  idInput: Array<string>
  name: string
  value: Array<string>
  checked: Array<boolean>
  handleInput(e: any): void
  labelText: Array<string>
  htmlFor: Array<string>
}

function FormGroupRadioChild(props: FormGroupRadioChildProps) {
  const {
    labelHeading,
    labelClassname, 
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
        className={labelClassname}
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
            className={labelClassname}
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
            className={labelClassname}
          />
        </div>
      </div>
    </div>
  )
}

export default FormGroupRadioChild