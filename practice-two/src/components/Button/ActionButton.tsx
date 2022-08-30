import React from "react"

interface ActionButtonProps {
  className: string
  text: string
  handleClick?(e?: any): void
}

function ActionButton(props: ActionButtonProps) {
  const {className, handleClick, text} = props

  return (
    <button 
      className={`btn ${className}`} 
      onClick={handleClick}
      >
        {text}
      </button>
  )
}

export default ActionButton