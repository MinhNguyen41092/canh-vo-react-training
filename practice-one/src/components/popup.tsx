import React from "react";

class Popup extends React.Component {
  constructor(props: any) { 
    super(props)

    this.state = {
      title: 'Welcome to Quizz',
      buttonText: 'START THE QUIZZ'
    }
  }

  render() {
    let {title, buttonText}: any = this.state

    return (
      <div className="popup">
        <h1>{title}</h1>
        <button>{buttonText}</button>
      </div>
    )
  }
}

export default Popup