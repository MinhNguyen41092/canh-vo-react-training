import { useLocation, Link } from "react-router-dom";
import ChildResult from "./child-result"

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
      <h3 className="result-score">You got: {resultData.score} out of {resultData.listQuestion.length} questions right.</h3>
      
      {resultData.listQuestion.map((item, index) => (
        
        <ChildResult
          key={index}
          numberQuestion={index+1}
          question={item}
          userAnswer={resultData.listUserAnswer[index]}
          answer={listAnswer[index]}
        />
      ))}

      <Link className="link" to={{pathname: "/"}} >
        <button className="btn popup-btn">Restart</button>
      </Link>
    </div>
  )
}

export default Result