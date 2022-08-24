import React from "react";

function Input(props: any) {
  const {type, id, name,value, className, checked,handleInput} = props

  return (
    <input 
      type={type} 
      id={id} 
      name={name}
      value={value}
      checked={checked}
      className={className}
      onChange={(e) => handleInput(e)} 
  />
  )
}

export default Input