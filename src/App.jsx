import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <h1>DARIS TODO LIST</h1>

      <div className="form">
        <input
          type="text"
          onChange={() => {
            console.log("CHANGED");
          }}
        />
        <button
          onClick={() => {
            console.log("CLICKED");
          }}
        >
          ADD
        </button>
      </div>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
