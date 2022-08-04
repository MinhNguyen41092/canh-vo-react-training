import React from "react";
import axios from "axios";
import Popup from "../components/popup";

class Main extends React.Component {
  
  constructor(props: any) {
    super(props)

    this.state = {
      listQuestion: [],
      currentIndex: 0,
      userAnswer: null,
      options: [],
      quizEnd: false,
      score: 0,
      disable: true,
      displayPopup: 'flex'
    }
  }


  async componentDidMount() {
    let {currentIndex}: any = this.state
    let res = await axios.get('https://opentdb.com/api.php?amount=8');
    this.setState({
      listQuestion: res && res.data && res.data.results ? res.data.results: [],
      question: res.data.results[currentIndex].question,
      answers: res.data.results[currentIndex].incorrect_answers
      .push(res.data.results[currentIndex].correct_answer),
      correct: res.data.results[currentIndex].correct_answer,
      currentIndex: currentIndex + 1 
    })
  }


  render() {
    let { currentIndex, listQuestion, question, displayPopup}: any = this.state;

    return (
      <div>
        <Popup />
        <div>
          <div id="question" >
            <h4>Question {currentIndex}/{listQuestion.length}</h4>
            <p>{question}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Main