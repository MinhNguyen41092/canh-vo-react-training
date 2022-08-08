import React from "react";
import '../assets/styles/index.css'

type PopupProps = {
  startQuiz: () => void,
  style: {display: string}
}

type PopupState = {
  title: string,
  text: string,
  buttonText: string
}

class Popup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) { 
    super(props)

    this.state = {
      title: 'Welcome to Quizz',
      text: 'This is a quiz application built using ReactJS',
      buttonText: 'START THE QUIZZ'
    }

    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    this.props.startQuiz()
  }

  render() {
    let {title, text, buttonText} = this.state

    return (
      <div className="popup-container" style={this.props.style}>
        <div className="popup">
          <h1 className="popup-heading">{title}</h1>
          <p className="popup-text">{text}</p>
          <button className="btn popup-btn" onClick={this.handlePopup}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default Popup