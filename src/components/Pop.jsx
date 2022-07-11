import { useState } from "react";

const Pop = (props) => {
  const [isCardShown, setIsCardShown] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={() => {
          console.log("btn clicked");
          setIsCardShown(!isCardShown);
          console.log(isCardShown);
        }}
      >
        Show/Hide
      </button>
      {isCardShown && <h1 style={{ backgroundColor: "red" }}>{props.text}</h1>}
    </div>
  );
};

export default Pop;
