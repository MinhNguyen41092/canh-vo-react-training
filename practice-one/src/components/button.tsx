import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type ButtonProps = {
  text: string,
  disabled: boolean,
  nextQuestion: () => void
}

type ButtonState = {}

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
  }
  
  handleButton = () => {
    this.props.nextQuestion()
  }

  render() {
    const {disabled, text} = this.props

    return (
      <div className="btn-section">
        <button className="btn" disabled={disabled} onClick={this.handleButton}>{text}</button>
      </div>
    )
  }
}

export default Button