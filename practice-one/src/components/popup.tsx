import React from "react";
import '../assets/styles/index.css'

class Popup extends React.Component {
  constructor(props: any) { 
    super(props)

    this.state = {
      title: 'Welcome to Quizz',
      text: 'This is a quiz application built using ReactJS',
      buttonText: 'START THE QUIZZ'
    }
  }

  render() {
    let {title, text,buttonText}: any = this.state

    return (
      <div className="popup-container">
        <div className="popup">
          <h1 className="popup-heading">{title}</h1>
          <p className="popup-text">{text}</p>
          <button className="btn popup-btn">{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default Popup