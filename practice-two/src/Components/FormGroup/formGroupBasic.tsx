import React from "react";
import Label from "../Label/label";
import Input from "../Input/input";

interface FormGroupBasic {
    labelText: string 
    labelHtmlFor: string
    labelClassname: string
    inputType: string
    inputId: string
    inputName: string 
    inputValue?: string
    inputClassName: string 
    handleInput(e: any): void
    errorEmail?: string
    accept?: string
    display?: string,
    userAvatar?: string,
    avatar?: string
}

function FormGroupBasic(props: FormGroupBasic) {
  const {
    labelText, 
    labelHtmlFor,
    labelClassname,
    inputType, 
    inputId,
    inputName, 
    inputValue, 
    inputClassName, 
    handleInput,
    errorEmail,
    accept,
    display,
    userAvatar,
    avatar
  } = props

  return (
    <div className="form-group">
      <Label 
        text={labelText}
        htmlFor={labelHtmlFor}
        className={labelClassname}
      />
      <Input 
        type={inputType} 
        id={inputId} 
        name={inputName}
        value={inputValue} 
        className={inputClassName}
        accept={accept}
        handleInput={handleInput}
      />
      {errorEmail && (
        <span className="form-error">{errorEmail}</span>
      )}
      <img src={userAvatar} style={{display: display}} alt="" className="preview-avatar"/>
        {avatar && (
          <img src={avatar} alt="" className="preview-avatar"/>
        )}
    </div>
  )
}

export default FormGroupBasic