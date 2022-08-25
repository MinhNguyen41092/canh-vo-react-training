import React from "react"

interface ActionButtonProps {
  className: string
  text: string
  userId?: number
  handleButton(e?: any, userId?: number | undefined): void
}

function ActionButton(props: ActionButtonProps) {
  const {className, handleButton, text, userId} = props

  return (
    <button 
      className={`btn ${className}`} 
      onClick={(e) => handleButton(e, userId)}
      >
        {text}
      </button>
  )
}

export default ActionButton