import React from "react";

type ChildResultProps = {
  index: number
  item: string
  userAnswer: string,
  answer: string
}

type ChildResultState = {}

class ChildResult extends React.Component<ChildResultProps, ChildResultState> {
  
  render() {
    const {index, item, userAnswer, answer} = this.props

    return (
      <div className="result-detail">
        <p 
          className="result-question" 
          dangerouslySetInnerHTML={{__html:`Question ${index+1}: ${item}`}}
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