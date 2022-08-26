import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </button>
      <h1 ref={props.counterRef}>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
