import React from "react";

type QuestionProps = {
  listQuestion: Array<string>,
  currentIndex: number,
  question: string,
  answers: Array<string>,
  correct: string,
  isAnswered: boolean,
  showButton: () => void,
  increaseScore: () => void
}

type QuestionState = {
  disabled: boolean
}

class Question extends React.Component<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) { 
    super(props)
    this.state = {
      disabled: false
    }

    this.checkAnswer = this.checkAnswer.bind(this)
  }

  

  checkAnswer(e: any) {
    if(!this.props.isAnswered) {
      if(e.target.outerText === this.props.correct) {
        e.currentTarget.classList.add('right')
        this.props.increaseScore()
      }
      else {
        e.currentTarget.classList.add('wrong')
      }
    }
    
    this.props.showButton()
  }

  render() {

    return (
      <div className="container question-container">
          <div className="question" >
            <h3 className="number-question">Question {this.props.currentIndex}/{this.props.listQuestion.length}</h3>
            <p className="question-text">{this.props.question}</p>
          </div>
          <ul className="answers" >
            {this.props.answers.map((item, index) => (
              <li 
                className="answer" 
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