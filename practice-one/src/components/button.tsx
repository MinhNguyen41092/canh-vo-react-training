import React from "react";

type ButtonProps = {
  text: string,
  disabled: boolean,
  nextQuestion: () => void
}

class Button extends React.Component<ButtonProps, {}> {
  constructor(props: ButtonProps) {
    super(props)
    this.handleButton = this.handleButton.bind(this)
  }
  
  handleButton() {
    this.props.nextQuestion()
  }

  render() {
    return (
      <div className="btn-section">
        <button className="btn" disabled={this.props.disabled} onClick={this.handleButton}>{this.props.text}</button>
      </div>
    )
  }
}

export default Button