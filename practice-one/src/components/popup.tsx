import React from "react";
import '../assets/styles/index.css'

type PopupProps = {
  popupTitle: string,
  popupText: string,
  popupButtonText: string
  startQuiz: () => void,
  style: {display: string}
}

type PopupState = {}

class Popup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) { 
    super(props)

    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    if(this.props.popupButtonText === 'START THE QUIZZ') {
      this.props.startQuiz()
    } else window.location.reload(); 
  }

  render() {
    
    return (
      <div className="popup-container" style={this.props.style}>
        <div className="popup">
          <h1 className="popup-heading">{this.props.popupTitle}</h1>
          <p className="popup-text">{this.props.popupText}</p>
          <button className="btn popup-btn" onClick={this.handlePopup}>{this.props.popupButtonText}</button>
        </div>
      </div>
    )
  }
}

export default Popup