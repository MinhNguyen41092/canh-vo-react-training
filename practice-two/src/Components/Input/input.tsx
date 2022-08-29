import React from "react"

interface InputProps {
  type: string 
  id: string 
  name: string
  value?: string
  placeholder? :string
  className: string 
  checked?: boolean
  accept?: string 
  handleInputChange(e: any): void
}

function Input(props: InputProps) {
  const {
    type, 
    id, 
    name, 
    value, 
    className, 
    checked, 
    placeholder, 
    accept, 
    handleInputChange
  } = props

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
      onChange={(e) => handleInputChange(e)} 
  />
  )
}

export default Input