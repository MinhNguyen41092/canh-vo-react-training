import { link } from "fs"
import React, { useState } from "react"
import { Link } from "react-router-dom"

function ActionButton(props: any) {
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