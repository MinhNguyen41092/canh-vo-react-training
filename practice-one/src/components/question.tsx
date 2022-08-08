import React from "react";

type QuestionProps = {
  listQuestion: Array<string>,
  currentIndex: number,
  question: string,
  answers: Array<string>,
}

type QuestionState = {
  
}
class Question extends React.Component<QuestionProps, QuestionState> {
  constructor(props: QuestionProps) { 
    super(props)
  }

  render() {

    return (
      <div className="container question-container">
          <div className="question" >
            <h3 className="number-question">Question {this.props.currentIndex}/{this.props.listQuestion.length}</h3>
            <p className="question-text">{this.props.question}</p>
          </div>
          <ul className="answers">
            {this.props.answers.map(item => (
              <li className="answer" key={item}>{item}</li>
            ))}
          </ul>
        </div>
    )
  }
}

export default Question