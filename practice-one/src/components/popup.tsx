import React from "react";
import {Link} from 'react-router-dom'

type PopupProps = {
  title: string,
  text: string,
  buttonText: string
  startQuiz: () => void,
  style: {display: string},
  displayStartquizBtn: {display: string},
  displaySeeResultBtn: {display: string},
  score: number,
  listQuestion: Array<String>
  listUserAnswer: Array<String>
  data: Array<string>
}

type PopupState = {}

class Popup extends React.Component<PopupProps, PopupState> {
  constructor(props: PopupProps) { 
    super(props)

    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    if(this.props.buttonText === 'START THE QUIZZ') {
      this.props.startQuiz()
    }
  }

  render() {
    const {
      listQuestion, 
      score, 
      listUserAnswer, 
      data,
      style,
      title,
      text,
      buttonText,
      displayStartquizBtn,
      displaySeeResultBtn
    } = this.props

    const reusltData = {
      listQuestion: listQuestion,
      score: score,
      listUserAnswer: listUserAnswer,
      data: data
    }

    return (
      <div className="popup-container" style={style}>
        <div className="popup">
          <h1 className="popup-heading">{title}</h1>
          <p className="popup-text">{text}</p>
          <button 
            className="btn popup-btn" 
            onClick={this.handlePopup}
            style={displayStartquizBtn}
            >
              {buttonText}
          </button>
            <Link className="link" to={{pathname: "/result"}} 
                  state={reusltData}>
              <button className="btn popup-btn" style={displaySeeResultBtn}>See Result</button>
            </Link>
        </div>
      </div>
    )
  }
}

export default Popup