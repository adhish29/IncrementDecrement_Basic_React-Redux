import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.incDecNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement Calculator</h1>
      <div className="quantity">
        <div className="decrement" onClick={() => dispatch(decNumber())}>
          <span>-</span>
        </div>
        <input
          type="text"
          className="input_qty"
          value={myState}
          onChange={() => {}}
        />
        <div className="increment" onClick={() => dispatch(incNumber(5))}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

export default App;
