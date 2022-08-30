import React, { useState, useContext } from "react"

// Components
import ActionButton from "../Button/ActionButton"
import FormGroupBasic from "../FormGroup/FormGroupBasic"
import Input from "../Input/Input"
import Label from "../Label/Label"

// Context
import Context from "../../store/Context"

interface UserFormProps {
  handleValueChange(key: string, value: string): void
  handleAddUser(e: any): void
  error: string
  gender: string
  status: string
  btnText: string
  name?: string
  email?: string
  userAvatar?: string
}

const pattern = /^[^ ]*@[^ ]+\.[a-z]{2,3}$/

function UserForm(props: UserFormProps) {

  const themeContext = useContext(Context)
  const [avatar, setAvatar] = useState()
  const [errorEmail, setErrorEmail] = useState('');
  const [display, setDisplay] = useState('block')

  const {
    error, 
    btnText, 
    handleValueChange, 
    handleAddUser, 
    name, 
    email, 
    gender, 
    status, 
    userAvatar
  } = props

  // Get value input text type 
  const onValueTextChange = (e: any) => {
    handleValueChange(e.target.name, e.target.value)
  }

  // get value input email type
  const onValueEmailChange = (e: any) => {
    if (!e.target.value.match(pattern)) {
      setErrorEmail('Email is invalid');
    } else {
      setErrorEmail('');
      handleValueChange(e.target.name, e.target.value) 
    }
  }

  const onValueRadioChange = (e: any) => {
    handleValueChange(e.target.name, e.target.value)   
  }


  // Preview avatar and get URL avatar image
  const onValueImageChange = (e: any) => {
    const reader = new FileReader()
    
    reader.onload = () => {
      const result = reader.result as any
      setAvatar(result)
      setDisplay('none')
      handleValueChange(e.target.name, result)
    }
    reader.readAsDataURL(e.target.files[0])
  } 

  return (
    <form action="" className={`user-form ${themeContext.theme}`}>
      {props.error && (
        <span className="form-error">{error}</span>
      )}
      <FormGroupBasic 
        labelText="Name"
        labelHtmlFor="user-name"
        labelClassname="form-label"
        inputType="text"
        inputId="user-name"
        inputName="name"
        inputValue={name}
        inputClassName="input text-input"
        handleInput={onValueTextChange}
      />
    
      <FormGroupBasic 
        labelText="Email"
        labelHtmlFor="user-email"
        labelClassname="form-label"
        inputType="email"
        inputId="user-email"
        inputName="email"
        inputValue={email}
        inputClassName="input text-input"
        handleInput={onValueEmailChange}
        errorEmail={errorEmail}
      />

      <FormGroupBasic 
        labelText="Choose Image"
        labelHtmlFor="user-img"
        labelClassname="form-label img-label"
        inputType="file"
        inputId="user-img"
        inputName="avatar"
        accept="image/*"
        inputClassName="input img-input"
        handleInput={onValueImageChange}
        display={display}
        userAvatar={userAvatar}
        avatar={avatar}
      />

      <div className="form-group-radio">
        <div className="form-group">
          <Label 
            text="Gender"
            className="form-label"
          />
          <div className="form-input">
            <div className="input-group">
              <Input 
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={gender==="Male"}
                className="input radio-input"
                handleInputChange={onValueRadioChange}
              />
              <Label 
                text="Male"
                htmlFor="male"
                className="form-label"
              />
            </div>
            <div className="input-group">
              <Input 
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={gender==="Female"}
                className="input radio-input"
                handleInputChange={onValueRadioChange}
              />
              <Label 
                text="Female"
                htmlFor="female"
                className="form-label"
              />
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <Label 
            text="Status"
            className="form-label"
          />
          <div className="form-input">
            <div className="input-group">
              <Input 
                type="radio"
                id="inactive"
                name="status"
                value="Inactive"
                checked={status==="Inactive"}
                className="input radio-input"
                handleInputChange={onValueRadioChange}
              />
              <Label 
                text="Inactive"
                htmlFor="inactive"
                className="form-label"
              />
            </div>
            <div className="input-group">
              <Input 
                type="radio"
                id="active"
                name="status"
                value="Active"
                checked={status==="Active"}
                className="input radio-input"
                handleInputChange={onValueRadioChange}
              />
              <Label 
                text="Active"
                htmlFor="active"
                className="form-label"
              />
            </div>
          </div>
        </div>
      </div>

      <ActionButton 
        text={btnText} 
        className="add-btn"
        handleClick={handleAddUser}
      />
  </form>
  )
}

export default UserForm