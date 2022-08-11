import { useLocation, Link } from "react-router-dom";

type reusltData = {
  listQuestion: Array<string>
  score: number
  listUserAnswer: Array<string>,
  data: Array<string>
}
function Result() {
  const location = useLocation()
  const reusltData = location.state as reusltData
  const listAnswer: any = []
  reusltData.data.map((object: any) => {
    listAnswer.push(object.correct_answer)
  })

  return (
    <div className="result">
      <h3 className="result-score">You got: {reusltData.score} out of {reusltData.listQuestion.length} questions right.</h3>
      {reusltData.listQuestion.map((item, index) => (
        <div className="result-details" key={index}>
          <p className="result-question">Question {index+1}: {item}</p>
          <p className="result-selected">Selected: {reusltData.listUserAnswer[index]}</p>
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