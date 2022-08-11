import React from "react";

type QuestionProps = {
  listQuestion: Array<string>,
  currentIndex: number,
  question: string,
  answers: Array<string>,
  correct: string,
  showButton: () => void,
  getUserAnswer: (data: any) => void
}

type QuestionState = {
  disabled: boolean,
  selected: string,
  score: number
}

class Question extends React.Component<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) { 
    super(props)
    this.state = {
      disabled: false,
      selected: '',
      score: 0
    }

    this.checkAnswer = this.checkAnswer.bind(this)
  }

  checkAnswer(e: any) {
    const selected = e.target.outerText

    this.setState({
        selected: selected
    })

    this.props.showButton()
    this.props.getUserAnswer(selected)
  }

  render() {

    return (
      <div className="container question-container">
        <div className="question" >
          <h3 className="number-question">Question {this.props.currentIndex}/{this.props.listQuestion.length}</h3>
          <p className="question-text">{this.props.question}</p>
        </div>
        
        <ul className="answers" >
          {this.props.answers?.map((item, index) => (
            <li 
              className={`answer ${this.state.selected === item ? "selected": null}`} 
              key={index} 
              onClick={this.checkAnswer}
            >
                {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Question