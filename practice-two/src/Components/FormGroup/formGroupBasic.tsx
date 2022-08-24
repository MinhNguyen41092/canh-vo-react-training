import React from "react";
import Label from "../Label/label";
import Input from "../Input/input";

function FormGroupBasic(props: any) {
  const {
    labelText, 
    labelHtmlFor,
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
      />
      <Input 
        type={inputType} 
        id={inputId} 
        name={inputName}
        value={inputValue} 
        className={inputClassName}
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