import { useState } from "react";


function App() {
let [counter, setCounter] = useState(15)
  return (
    <>
      <h1>Das counter</h1>
      <p>this the number: {counter}</p>
      <button
        onClick={() => {
          if (counter < 20) {
            setCounter(counter + 1);
          }
        }}
      >
        add number
      </button>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          }
        }}
      >
        remove number
      </button>
    </>
  );
}

export default App
