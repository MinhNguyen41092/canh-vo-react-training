import React from "react";
import axios from "axios";
import Popup from "../components/popup";
import Question from "../components/question";
import Footer from "./footer";
import Button from "../components/button";

type MainProps = {

}

type MainState = {
  listQuestion: Array<string>,
  currentIndex: number,
  userAnswer: string|null,
  quizEnd: boolean,
  score: number,
  disable: boolean,
  question: string,
  answers: Array<string>,
  correct: string
}

class Main extends React.Component<MainProps, MainState> {
  
  constructor(props: MainProps) {
    super(props)

    this.state = {
      listQuestion: [],
      currentIndex: 0,
      userAnswer: null,
      quizEnd: false,
      score: 0,
      disable: true,
      question: '',
      answers: [],
      correct: ''
    }
  }


  async componentDidMount() {
    const {currentIndex} = this.state
    let res = await axios.get('https://opentdb.com/api.php?amount=8');
    const answer = res.data.results[currentIndex].incorrect_answers
          answer.push(res.data.results[currentIndex].correct_answer)
                  
    
    this.setState({
      listQuestion: res && res.data && res.data.results ? res.data.results: [],
      question: res.data.results[currentIndex].question,
      answers: answer,
      correct: res.data.results[currentIndex].correct_answer,
      currentIndex: currentIndex + 1 
    })
    console.log(this.state)
  }


  render() {
    const { currentIndex, listQuestion, question, answers} = this.state;

    return (
      <div>
        <Popup />
        <Question 
          currentIndex={currentIndex} 
          listQuestion={listQuestion} 
          question={question}
          answers={answers}
          />
        
        <Button text='NEXT QUESTION' disabled/>
        <Footer />
      </div>
    )
  }
}

export default Main