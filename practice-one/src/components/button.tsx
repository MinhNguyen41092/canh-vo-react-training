import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type ButtonProps = {
  text: string,
  className: string,
  style: {display: string},
  disabled: boolean,
  handleButton: () => void
}

type ButtonState = {}

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
  }
  
  handleButton = () => {
    this.props.handleButton()
  }

  render() {
    const {disabled, text, className, style} = this.props

    return (
      <div className="btn-section">
        <button className={className} style={style} disabled={disabled} onClick={this.handleButton}>{text}</button>
      </div>
    )
  }
}

export default Button