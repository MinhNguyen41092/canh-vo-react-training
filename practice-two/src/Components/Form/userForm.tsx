import React, { useState, useContext } from "react"
import Context from "../../store/Context"
import ActionButton from "../Button/button"


function UserForm(props: any) {

  const context = useContext(Context)
  const [avatar, setAvatar] = useState()

  const onValueChange = (e: any) => {
    props.handleValueChange(e.target.name, e.target.value)
  }

  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file)

    setAvatar(file.preview)
    props.handleValueChange(e.target.name, file.preview)
  } 

  return (
    <form action="" className={`user-form ${context.theme}`}>
      <div className="form-group form-input-text">
        <label htmlFor="user-name" className="form-label" >Name</label>
        <input type="text" id="user-name" name="name" className="form-input" onChange={(e) => onValueChange(e)} />
      </div>
      <div className="form-group form-input-text">
        <label htmlFor="user-email" className="form-label" >Email</label>
        <input type="email" id="user-email" name="email" className="form-input" onChange={(e) => onValueChange(e)} />
      </div>
      <div className="form-group form-input-text">
        <label htmlFor="user-gender" className="form-label" >Gender</label>
        <input type="text" id="user-email" name="gender" className="form-input" onChange={(e) => onValueChange(e)} />
      </div>
      <div className="form-group">
        <label htmlFor="user-img" className="form-label" >Choose Image</label>
        <input 
          type="file" id="user-img" name="avatar" className="form-input" onChange={(e) => handlePreviewAvatar(e)} />
          {avatar && (
            <img src={avatar} alt="" className="preview-avatar"/>
          )}
      </div>

      <ActionButton 
        text="Add User" 
        className="add-btn"
        handleAddUser={props.handleAddUser}
      />
      
  </form>
  )
}

export default UserForm