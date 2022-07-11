const Card = ({ value }) => {
  return (
    <div className="card">
      <div>{value}</div>
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
