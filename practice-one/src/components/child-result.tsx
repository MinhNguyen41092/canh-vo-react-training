import React from "react";

type ChildResultProps = {
  numberQuestion: number
  question: string
  userAnswer: string,
  answer: string
}

type ChildResultState = {}

class ChildResult extends React.Component<ChildResultProps, ChildResultState> {
  
  render() {
    const {numberQuestion, question, userAnswer, answer} = this.props

    return (
      <div className="result-detail">
        <p 
          className="result-question" 
          dangerouslySetInnerHTML={{__html:`Question ${numberQuestion}: ${question}`}}
        ></p>

        <p 
          className="result-selected" 
          dangerouslySetInnerHTML={{__html:`Selected: ${userAnswer}`}}
        ></p>

        <p 
          className="result-answer" 
          dangerouslySetInnerHTML={{__html:`Answer: ${answer}`}}
        ></p>
      </div>
    )
  }
}

export default ChildResult