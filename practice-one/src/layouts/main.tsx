import React from "react";
import { data } from "../apis/api";
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
  questionAnswered: boolean,
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
      // objQuestion: {},
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
    
    const {currentIndex} = this.state
    
    const quizzData = await data
    
    const question = quizzData[currentIndex]?.question
    const formatQuestion = question?.replace(/&quot;/g, '').replace(/&#039;/g, '')
    .replace(/&amp;/g, '').replace(/&Uuml;/g, '').replace(/&Uuml;/g, '')

    const answer = quizzData[currentIndex]?.incorrect_answers
    
    const correct = quizzData[currentIndex]?.correct_answer
    const formatCorrect = correct?.replace(/&quot;/g, '').replace(/&#039;/g, '')
    .replace(/&amp;/g, '').replace(/&Uuml;/g, '').replace(/&Uuml;/g, '')
    
    if(answer?.indexOf(formatCorrect) === -1) answer.push(formatCorrect)

    answer?.sort(function() {
      return 0.5 - Math.random();
    });

    const formatAnswer = answer?.map((item: string) => {
      return item?.replace(/&quot;/g, '').replace(/&#039;/g, '')
      .replace(/&amp;/g, '').replace(/&Uuml;/g, '').replace(/&Uuml;/g, '')
    })

    const list: any = []
    quizzData.map((item: any) => (
      list.push(item.question.replace(/&quot;/g, '').replace(/&#039;/g, '')
      .replace(/&amp;/g, '').replace(/&Uuml;/g, '').replace(/&Uuml;/g, ''))
    ))

    this.setState({
      data: quizzData,
      listQuestion: list,
      question: formatQuestion,
      answers: formatAnswer,
      correct: formatCorrect,
      currentIndex: currentIndex + 1
    })           
  }

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
      this.setState({
        userAnswer: data,
      });
  }
  
  handleNextQuestion() {
    let {listQuestion, currentIndex, score, correct, userAnswer} = this.state

    const listUserAnswer = this.state.listUserAnswer

    listUserAnswer.push(userAnswer)
    
    this.setState({
      listUserAnswer: listUserAnswer
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
      this.setState({
        disable: true,
        questionAnswered:false,
      })
    }
    
    this.componentDidMount()
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
      <div>
        <Popup 
          startQuiz={this.handleStartQuiz} 
          style={{display: displayPopup}}
          displayStartquizBtn={{display: displayStartquizBtn}}
          displaySeeResultBtn={{display: displaySeeResultBtn}}
          popupTitle={popupTitle}
          popupText={popupText}
          popupButtonText={popupButtonText}
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
      </div>
    )
  }
}

export default Main