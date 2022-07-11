import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <button
        onClick={() => {
          console.log("COUNTER SHOULD COUNT Down");
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          console.log("COUNTER SHOULD COUNT UP");
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          console.log("COUNTER SHOULD COUNT UP");
          setCounter(0);
          console.log(counter);
        }}
      >
        RESTART
      </button>
    </div>
  );
};

export default Counter;
