import { useLocation, Link } from "react-router-dom";

type resultData = {
  listQuestion: Array<string>
  score: number
  listUserAnswer: Array<string>,
  data: Array<string>
}
function Result() {
  const location = useLocation()
  const resultData = location.state as resultData
  const listAnswer: any = []
  resultData.data.map((object: any) => {
    listAnswer.push(object.correct_answer)
  })

  return (
    <div className="result">
      <h3 className="result-score">You got: {resultData.score} out of {resultData.listQuestion.length} questions right.</h3>
      {resultData.listQuestion.map((item, index) => (
        <div className="result-details" key={index}>
          <p className="result-question">Question {index+1}: {item}</p>
          <p className="result-selected">Selected: {resultData.listUserAnswer[index]}</p>
          <p className="result-answer">Answer: {listAnswer[index]}</p>
        </div>
      ))}

      <Link className="link" to={{pathname: "/"}} >
        <button className="btn popup-btn">Restart</button>
      </Link>
    </div>
  )
}

export default Result