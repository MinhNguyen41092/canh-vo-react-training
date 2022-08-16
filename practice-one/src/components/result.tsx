import { useLocation, Link } from "react-router-dom";
import ResultDetails from "./result-details"

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
  
  resultData.data.forEach((object: any) => {
    listAnswer.push(object.correct_answer)
  })

  return (
    <div className="result">
      <ResultDetails 
        score={resultData.score} 
        listQuestion={resultData.listQuestion} 
        listAnswer={listAnswer}
        listUserAnswer={resultData.listUserAnswer}
        />

      <Link className="link" to={{pathname: "/"}} >
        <button className="btn popup-btn">Restart</button>
      </Link>
    </div>
  )
}

export default Result