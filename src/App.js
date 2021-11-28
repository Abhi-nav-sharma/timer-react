import { useState } from "react";
import Timer from "./components/Timer";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    start: "",
    end: ""
  });
  const [timer, setTimer] = useState(false);
  function handleInput(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  return (
    <div className="App">
      <h1>Timer App</h1>
      <input
        name="start"
        value={state.start}
        onChange={handleInput}
        placeholder="Enter initial time (seconds)"
      />
      <br />
      <input
        name="end"
        value={state.end}
        onChange={handleInput}
        placeholder="Enter end time (seconds)"
      />
      <br />
      {timer && <button onClick={() => setTimer(!timer)}>Stop Timer</button>}
      {!timer && <button onClick={() => setTimer(!timer)}>Start Timer</button>}
      {timer && <Timer start={state.start} end={state.end} />}
    </div>
  );
}
