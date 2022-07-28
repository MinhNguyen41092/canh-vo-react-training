import { useReducer } from "react"

 // Init State
 const initState = 0

 // Actions
 const UP_ACTION = 'up'
 const DOW_ACTION = 'down'

 // Reducer
 const reducer = (state, action) => {
   switch(action) {
     case UP_ACTION:
       return state + 1
     case DOW_ACTION:
       return state -1 
     default:
       throw new Error('Invalid Action')
   }
 }

export default function UseReducerExample() {
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <>
      <h1>useReducer Ex</h1>
      <h2>{count}</h2>
      <button
        onClick={() => dispatch(DOW_ACTION)}
      >
        Down
      </button>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button>
    </>
  )
}