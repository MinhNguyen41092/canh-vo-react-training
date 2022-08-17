import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type ResultDetailsProps = {
  score: number,
  listQuestion: Array<string>,
  listAnswer: Array<string>,
  listUserAnswer: Array<string>
}

type ResultDetailsState = {}

class ResultDetails extends React.Component<ResultDetailsProps, ResultDetailsState> {
  render() {
    const {score, listQuestion, listAnswer, listUserAnswer} = this.props

    return (
      <>
      <h3 className="result-score">You got: {score} out of {listQuestion.length} questions right.</h3>
      
      {listQuestion.map((item, index) => (
        <div className="result-details" key={index}>
          <p 
            className="result-question" 
            dangerouslySetInnerHTML={{__html:`Question ${index+1}: ${item}`}}
            ></p>

          <p 
            className="result-selected" 
            dangerouslySetInnerHTML={{__html:`Selected: ${listUserAnswer[index]}`}}
            ></p>

          <p 
            className="result-answer" 
            dangerouslySetInnerHTML={{__html:`Answer: ${listAnswer[index]}`}}
            ></p>
        </div>
      ))}
      </>
    )
  }
}

export default ResultDetails