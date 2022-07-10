const Card = () => {
  return (
    <div className="card">
      <div>DARIS</div>
      <button
        className="submit"
        onClick={() => {
          console.log("ELEMENT submited");
        }}
      >
        Submit
      </button>
      <button
        className="delete"
        onClick={() => {
          console.log("ELEMENT DLEETE");
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Card;
