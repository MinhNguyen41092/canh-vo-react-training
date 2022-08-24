import React from "react";

interface InputProps {
  type: string 
  id: string 
  name: string
  value?: string
  placeholder? :string
  className: string 
  checked?: boolean
  accept?: string 
  handleInput(e: any): void
}

function Input(props: InputProps) {
  const {type, id, name, value, className, checked, placeholder, accept, handleInput} = props

  return (
    <input 
      type={type} 
      id={id} 
      name={name}
      value={value}
      accept={accept}
      checked={checked}
      className={className}
      placeholder={placeholder}
      onChange={(e) => handleInput(e)} 
  />
  )
}

export default Input