import React, { useState, useContext } from "react"

// Components
import ActionButton from "../Button/ActionButton"
import FormGroupBasic from "../FormGroup/FormGroupBasic"
import FormGroupRadioChild from "../FormGroup/FormGroupRadioChild"

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
        <FormGroupRadioChild 
          labelHeading="Gender"
          labelClassname="form-label"
          idInput={["male", "female"]}
          name="gender"
          value={["Male", "Female"]}
          checked={[gender==="Male", gender==="Female"]}
          handleInput={onValueRadioChange}
          labelText={["Male", "Female"]}
        />

        <FormGroupRadioChild 
          labelHeading="Status"
          labelClassname="form-label"
          idInput={["inactive", "active"]}
          name="status"
          value={["Inactive", "Active"]}
          checked={[status==="Inactive", status==="Active"]}
          handleInput={onValueRadioChange}
          labelText={["Inactive", "Active"]}

        />
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