import UseEffectExample from './useEffect-example';
import {useState} from 'react'

function App(props) {

  const [count, setCount] = useState(1)
  const [show, setShow] = useState(false);

  const handleIncrease = () => {
    setCount(count + 1)
  }




  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <UseEffectExample />}
    </div>
  );
}

export default App;
