import React from "react";
import {Link} from 'react-router-dom'

type PopupProps = {
  popupTitle: string,
  popupText: string,
  popupButtonText: string
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
    if(this.props.popupButtonText === 'START THE QUIZZ') {
      this.props.startQuiz()
    }
  }

  render() {
    let {listQuestion, score, listUserAnswer, data} = this.props
    const reusltData = {
      listQuestion: listQuestion,
      score: score,
      listUserAnswer: listUserAnswer,
      data: data
    }

    return (
      <div className="popup-container" style={this.props.style}>
        <div className="popup">
          <h1 className="popup-heading">{this.props.popupTitle}</h1>
          <p className="popup-text">{this.props.popupText}</p>
          <button 
            className="btn popup-btn" 
            onClick={this.handlePopup}
            style={this.props.displayStartquizBtn}
            >
              {this.props.popupButtonText}
          </button>
            <Link className="link" to={{pathname: "/result"}} 
                  state={reusltData}>
              <button className="btn popup-btn" style={this.props.displaySeeResultBtn}>See Result</button>
            </Link>
        </div>
      </div>
    )
  }
}

export default Popup