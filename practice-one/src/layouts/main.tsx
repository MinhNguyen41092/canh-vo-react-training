import React from "react";
import { quizData } from "../apis/api";
import Popup from "../components/popup";
import Question from "../components/question";
import Footer from "./footer";
import Button from "../components/button";

type MainProps = {}

type MainState = {
  data: Array<any>,
  listQuestion: Array<string>,
  currentIndex: number,
  score: number,
  disable: boolean,
  question: any,
  answers: Array<string>,
  correct: string,
  userAnswer: string,
  listUserAnswer: Array<string>,
  displayPopup: string,
  displayStartquizBtn: string,
  displaySeeResultBtn: string,
  popupTitle: string,
  popupText: string,
  popupButtonText: string
}

class Main extends React.Component<MainProps, MainState> {
  
  constructor(props: MainProps) {
    super(props)

    this.state = {
      data: [],
      listQuestion: [],
      currentIndex: 0,
      score: 0,
      disable: true,
      question: '',
      answers: [],
      correct: '',
      userAnswer: '',
      listUserAnswer: [],
      displayPopup: 'block',
      displayStartquizBtn: 'block',
      displaySeeResultBtn: 'none',
      popupTitle: 'Welcome to Quizz',
      popupText: 'This is a quiz application built using ReactJS',
      popupButtonText: 'START THE QUIZZ'
    }
  }

  //
  async componentDidMount() {
    const {currentIndex} = this.state
    const quizzData = await quizData
    const question = quizzData[currentIndex]?.question
    const correct = quizzData[currentIndex]?.correct_answer
    const answer = quizzData[currentIndex]?.incorrect_answers

    if(answer?.indexOf(correct) === -1) answer.push(correct)

    this.formatAnswer(answer)

    const list: any = []
    quizzData.map((item: any) => (
      list.push(item.question)
    ))

    this.setState({
      data: quizzData,
      listQuestion: list,
      question: question,
      answers: answer,
      correct: correct,
      currentIndex: currentIndex + 1
    })           
  }

  formatAnswer(Array: Array<string>) {
    Array?.sort(function() {
      return 0.5 - Math.random();
    })
  } 

  pushData() {
    const {data, currentIndex} = this.state
    const question = data[currentIndex].question
    const correct = data[currentIndex]?.correct_answer
    const answer = data[currentIndex]?.incorrect_answers

    if(answer?.indexOf(correct) === -1) answer.push(correct)

    this.formatAnswer(answer)

    this.setState({
      question: question,
      answers: answer,
      correct: correct,
      currentIndex: currentIndex + 1
    })
  }

  handleStartQuiz = () => {
    this.setState({
      displayPopup: 'none',
    })
  }

  handleShowButton = () => {
    this.setState({
      disable: false,
    })
  }

  getUserAnswer = (data: any) => {
    this.setState({
      userAnswer: data,
    });
  }
  
  handleNextQuestion = () => {
    const {listQuestion, currentIndex, score, correct, userAnswer, listUserAnswer} = this.state

    const updateListUserAnswer = listUserAnswer

    updateListUserAnswer.push(userAnswer)
    
    this.setState({
      listUserAnswer: updateListUserAnswer,
    })

    if(userAnswer === correct) {
      this.setState({
        score: score + 1,
      })
    }
    
    if(currentIndex === listQuestion.length) {
      this.setState({
        displayPopup: 'block',
        displaySeeResultBtn:'block',
        displayStartquizBtn: 'none',
        popupTitle: 'Finish Quizz',
        popupText: "You have completed the quiz",
        popupButtonText: 'SEE RESULT',
      })
    } else {
      this.pushData()
      this.setState({
        disable: true,
      })
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
      displayStartquizBtn,
      displaySeeResultBtn, 
      disable,
      popupTitle,
      popupText,
      popupButtonText,
      score,
      listUserAnswer,
      data
    } = this.state;

    return (
      <>
        <Popup 
          startQuiz={this.handleStartQuiz} 
          style={{display: displayPopup}}
          displayStartquizBtn={{display: displayStartquizBtn}}
          displaySeeResultBtn={{display: displaySeeResultBtn}}
          title={popupTitle}
          text={popupText}
          buttonText={popupButtonText}
          score={score}
          listQuestion={listQuestion}
          listUserAnswer={listUserAnswer}
          data={data}
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
      </>
    )
  }
}

export default Main