import UseEffectExample from "./components/useEffect-example";
import UseStateExamples from "./components/useState-example";
import UseRefExample from "./components/useRef-example";
import UseCallBack from "./components/useCallback-example";
import UseMemoEx from "./components/useNemo-example";
import UseContextExample from "./components/useContext-example";
import UseReducerExample from "./components/useReducer-example";

import { createContext } from "react";

export const ExampleContext = createContext();

function App(props) {

  return (
    <ExampleContext.Provider value={{color: 'red'}}>
      <div className="App" style={{padding: 30}}>
        <UseStateExamples />
        <UseEffectExample />
        <UseRefExample />
        <UseCallBack />
        <UseMemoEx />
        <UseContextExample />
        <UseReducerExample />
    </div>
    </ExampleContext.Provider>
  );
}

export default App;
