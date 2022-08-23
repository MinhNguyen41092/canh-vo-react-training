import React from "react"


function ActionButton(props: any) {
  const {className, handleAddUser, text} = props

  return (
    <button className={`button ${className}`} onClick={(e) => handleAddUser(e)}>{text}</button>
  )
}

export default ActionButton