import { createRef } from "react";
import Counter from "./components/Counter";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const counterRef = createRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("SOME url")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <Counter counterRef={counterRef} data={data} />
      <Card
        title={"Daris"}
        onDelete={() => {
          console.log("vrednost counter je", counterRef.current.innerText);
        }}
      />
    </div>
  );
};

export default App;
