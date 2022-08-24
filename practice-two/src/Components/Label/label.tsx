import React from "react";

interface LabelProps {
  htmlFor?: string
  text: string
  className: string
}

function Label(props: LabelProps) {
  const {htmlFor, text, className} = props

  return (
    <label className={className} htmlFor={htmlFor}>{text}</label>
  )
}

export default Label