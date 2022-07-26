// import UseEffectExample from './useEffect-example';
import UseEffectExample from "./components/useEffect-example";
import UseStateExamples from "./components/useState-example"

function App(props) {

  // const [show, setShow] = useState(false);

  return (
    <div className="App" style={{padding: 30}}>
      <UseStateExamples />
      <UseEffectExample />
    </div>
  );
}

export default App;
