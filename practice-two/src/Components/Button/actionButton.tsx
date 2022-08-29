import React from "react"

interface ActionButtonProps {
  className: string
  text: string
  userId?: number
  handleClick(e?: any, userId?: number | undefined): void
}

function ActionButton(props: ActionButtonProps) {
  const {className, handleClick, text, userId} = props

  return (
    <button 
      className={`btn ${className}`} 
      onClick={(e) => handleClick(e, userId)}
      >
        {text}
      </button>
  )
}

export default ActionButton