import React from "react"

// Components
import Label from "../Label/Label"
import Input from "../Input/Input"

interface FormGroupRadioChildProps {
  labelHeading: string
  labelClassname: string 
  idInput: Array<string>
  name: string
  value: Array<string>
  checked: Array<boolean>
  handleInput(e: any): void
  labelText: Array<string>
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
            handleInputChange={handleInput}
          />
          <Label 
            text={labelText[0]}
            htmlFor={idInput[0]}
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
            handleInputChange={handleInput}
          />
          <Label 
            text={labelText[1]}
            htmlFor={idInput[1]}
            className={labelClassname}
          />
        </div>
      </div>
    </div>
  )
}

export default FormGroupRadioChild