import React, { useState, useContext } from "react"
import Context from "../../store/Context"
import ActionButton from "../Button/actionButton"
import FormGroupBasic from "../FormGroup/formGroupBasic"
import FormGroupRadioChild from "../FormGroup/formGroupRadioChild"

function UserForm(props: any) {

  const themeContext = useContext(Context)
  const [avatar, setAvatar] = useState()
  const [errorEmail, setErrorEmail] = useState('');
  const [display, setDisplay] = useState('block')

  const {error, btnText, handleValueChange, handleAddUser, name, email, gender, status, userAvatar} = props


  // Get value input text type 
  const onValueTextChange = (e: any) => {
    handleValueChange(e.target.name, e.target.value)
  }

  const pattern = /^[^ ]*@[^ ]+\.[a-z]{2,3}$/

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
        inputType="email"
        inputId="user-email"
        inputName="email"
        inputValue={email}
        inputClassName="input text-input"
        handleInput={onValueEmailChange}
        errorEmail={errorEmail}
      />

      <div className="form-group-radio">
        <FormGroupRadioChild 
          labelHeading="Gender"
          idInput={["male", "female"]}
          name="gender"
          value={["Male", "Female"]}
          checked={[gender==="Male", gender==="Female"]}
          handleInput={onValueRadioChange}
          labelText={["Male", "Female"]}
          htmlFor={["male", "female"]}
        />

        <FormGroupRadioChild 
          labelHeading="Status"
          idInput={["inactive", "active"]}
          name="status"
          value={["Inactive", "Active"]}
          checked={[status==="Inactive", status==="Active"]}
          handleInput={onValueRadioChange}
          labelText={["Inactive", "Active"]}
          htmlFor={["inactive", "active"]}
        />
      </div>

       <FormGroupBasic 
        labelText="ChooseImage"
        labelHtmlFor="user-img"
        inputType="file"
        inputId="user-img"
        inputName="avatar"
        accept="image/*"
        inputClassName="input text-input"
        handleInput={onValueImageChange}
        errorEmail={errorEmail}
        display={display}
        userAvatar={userAvatar}
        avatar={avatar}
      />

      <ActionButton 
        text={btnText} 
        className="add-btn"
        handleButton={handleAddUser}
      />
  </form>
  )
}

export default UserForm