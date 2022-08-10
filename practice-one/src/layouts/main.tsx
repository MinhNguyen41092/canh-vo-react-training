import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "../components/popup";
import Question from "../components/question";
import Footer from "./footer";
import Button from "../components/button";

// type objQuestion = {
//   category? :string,
//   question?: string,
//   correct_answer?: string,
//   difficulty?: string,
//   incorrect_answers?: Array<string>
//   type?: boolean
// }

type MainProps = {}

type MainState = {
  listQuestion: Array<string>,
  // objQuestion: objQuestion,
  currentIndex: number,
  score: number,
  disable: boolean,
  question: any,
  answers: Array<string>,
  correct: string,
  userAnswer: string,
  displayPopup: string,
  displayStartquizBtn: string,
  displaySeeResultBtn: string,
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
      // objQuestion: {},
      currentIndex: 0,
      score: 0,
      disable: true,
      question: '',
      answers: [],
      correct: '',
      userAnswer: '',
      displayPopup: 'block',
      displayStartquizBtn: 'block',
      displaySeeResultBtn: 'none',
      questionAnswered: false,
      popupTitle: 'Welcome to Quizz',
      popupText: 'This is a quiz application built using ReactJS',
      popupButtonText: 'START THE QUIZZ'
    }

    this.handleStartQuiz = this.handleStartQuiz.bind(this)
    this.handleShowButton = this.handleShowButton.bind(this)
    this.getUserAnswer = this.getUserAnswer.bind(this)
    this.handleNextQuestion = this.handleNextQuestion.bind(this)
    this.handleRestartQuiz = this.handleRestartQuiz.bind(this)
  }

  async componentDidMount() {
    const {currentIndex, listQuestion} = this.state
    let res = await axios.get('https://opentdb.com/api.php?amount=5');
    const answer = res.data.results[currentIndex].incorrect_answers
          answer.push(res.data.results[currentIndex].correct_answer)            
    this.setState({
      listQuestion: res && res.data && res.data.results ? res.data.results: [],
      question: res.data.results[currentIndex].question,
      answers: answer,
      correct: res.data.results[currentIndex].correct_answer,
      currentIndex: currentIndex + 1,
    })
  }

  // setData() {
    
    
  //   // this.setState({
  //   //   question: this.state.listQuestion[currentIndex].question,
  //   //   answers: answer,
  //   //   correct: this.state.listQuestion[currentIndex].correct_answer,
  //   //   currentIndex: currentIndex + 1 
  //   // })
  // }

  handleStartQuiz() {
    this.setState({
      displayPopup: 'none',
    })
  }

  handleRestartQuiz() {
    this.setState({
      displayPopup: 'none',
    })
  }

  handleShowButton() {
    this.setState({
      disable: false,
    })
  }

  getUserAnswer(data: any) {
    if(data == this.state.correct) {
      this.setState({
        userAnswer: data
      });
    }
  }
  


  liRef = React.createRef<HTMLDivElement>();

  handleNextQuestion() {
    let {listQuestion, currentIndex, score, correct, userAnswer} = this.state
    if(userAnswer == correct) {
      this.setState({
      score: score + 1
    })
    }
  
    if(currentIndex === listQuestion.length) {
      this.setState({
        displayPopup: 'block',
        displaySeeResultBtn:'block',
        displayStartquizBtn: 'none',
        popupTitle: 'Finish Quizz',
        popupText: "You have completed the quiz",
        popupButtonText: 'SEE RESULT'
      })
    } else {
      this.componentDidMount()
      this.setState({
        disable: true,
        questionAnswered:false,
      })
    }
  }
    // const ul = this.liRef.current?.children[1].children[1].children
    // if(ul) {
    //   for (var i = 0; i < ul.length; i++) {
    //     var li = ul[i];
    //     li.classList.remove('right')
    //     li.classList.remove('wrong')
    //   }
    // }

  render() {
    const { 
      currentIndex, 
      listQuestion, 
      question, 
      answers, 
      correct, 
      displayPopup,
      displayStartquizBtn,
      displaySeeResultBtn, 
      disable,
      popupTitle,
      popupText,
      popupButtonText,
      score
    } = this.state;

    return (
      <div ref={this.liRef}>
        <Popup 
          startQuiz={this.handleStartQuiz} 
          style={{display: displayPopup}}
          displayStartquizBtn={{display: displayStartquizBtn}}
          displaySeeResultBtn={{display: displaySeeResultBtn}}
          popupTitle={popupTitle}
          popupText={popupText}
          popupButtonText={popupButtonText}
          score={score}
        />

        <Question 
          currentIndex={currentIndex} 
          listQuestion={listQuestion} 
          question={question}
          answers={answers}
          correct={correct}
          showButton={this.handleShowButton}
          getUserAnswer={this.getUserAnswer}
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