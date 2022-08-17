import React from "react";

type ChildResultProps = {
  index: number,
  item: string,
  listUserAnswer: Array<string>,
  listAnswer: Array<string>
}

type ChildResultState = {}

class ChildResult extends React.Component<ChildResultProps, ChildResultState> {
  
  render() {
    const {index, item, listUserAnswer, listAnswer} = this.props

    return (
      <div className="result-detail">
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
    )
  }
}

export default ChildResult