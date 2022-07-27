// import UseEffectExample from './useEffect-example';
import UseEffectExample from "./components/useEffect-example";
import UseStateExamples from "./components/useState-example";
import UseRefExample from "./components/useRef-example";
import UseCallBack from "./components/useCallback-example";
import UseMemoEx from "./components/useNemo-example";

function App(props) {

  // const [show, setShow] = useState(false);

  return (
    <div className="App" style={{padding: 30}}>
      <UseStateExamples />
      <UseEffectExample />
      <UseRefExample />
      <UseCallBack />
      <UseMemoEx />
    </div>
  );
}

export default App;
