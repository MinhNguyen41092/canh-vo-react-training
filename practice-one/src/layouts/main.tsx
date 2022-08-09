import React from "react";
import axios from "axios";
import Popup from "../components/popup";
import Question from "../components/question";
import Footer from "./footer";
import Button from "../components/button";
import { umask } from "process";

type MainProps = {}

type MainState = {
  listQuestion: Array<string>,
  currentIndex: number,
  userAnswer: string|null,
  quizEnd: boolean,
  score: number,
  disable: boolean,
  question: string,
  answers: Array<string>,
  correct: string,
  displayPopup: string,
  questionAnswered: boolean,
  popupTitle: string,
  popupText: string,
  popupButtonText: string
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
      correct: '',
      displayPopup: 'block',
      questionAnswered: false,
      popupTitle: 'Welcome to Quizz',
      popupText: 'This is a quiz application built using ReactJS',
      popupButtonText: 'START THE QUIZZ'
    }

    this.handleStartQuiz = this.handleStartQuiz.bind(this)
    this.handleShowButton = this.handleShowButton.bind(this)
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this)
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
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
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: 'none',
    })
  }

  handleShowButton() {
    this.setState({
      disable: false,
      questionAnswered: true
    })
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  liRef = React.createRef<HTMLDivElement>();

  handleNextQuestion() {
    let {listQuestion, currentIndex, } = this.state
    if(currentIndex === listQuestion.length) {
      this.setState({
        displayPopup: 'block',
        popupTitle: 'Congratulations!',
        popupText: `You have completed the quiz, you got: ${this.state.score} 
                    out of ${this.state.listQuestion.length} questions right.`,
        popupButtonText: 'RESTART'
      })
    } else {
      this.componentDidMount()
      this.setState({
        disable: true,
        questionAnswered:false
      })
    }

    const ul = this.liRef.current?.children[1].children[1].children
    if(ul) {
      for (var i = 0; i < ul.length; i++) {
        var li = ul[i];
        li.classList.remove('right')
        li.classList.remove('wrong')
      }
    }
  }

  render() {
    const { 
      currentIndex, 
      listQuestion, 
      question, 
      answers, 
      correct, 
      displayPopup, 
      questionAnswered,
      disable,
      popupTitle,
      popupText,
      popupButtonText
    } = this.state;

    return (
      <div ref={this.liRef}>
        <Popup 
          startQuiz={this.handleStartQuiz} 
          style={{display: displayPopup}}
          popupTitle={popupTitle}
          popupText={popupText}
          popupButtonText={popupButtonText}
        />

        <Question 
          currentIndex={currentIndex} 
          listQuestion={listQuestion} 
          question={question}
          answers={answers}
          correct={correct}
          isAnswered={questionAnswered}
          showButton={this.handleShowButton}
          increaseScore={this.handleIncreaseScore}
        />
        
        <Button 
          text='NEXT QUESTION' 
          disabled={disable} 
          nextQuestion={this.handleNextQuestion}
        />

        <Footer />
      </div>
    )
  }
}

export default Main