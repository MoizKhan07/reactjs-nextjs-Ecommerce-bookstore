import React from "react";
import "./jumbotron.css";
const Jumbotron = () => {
  return (
    <div className="jumbo">
      <h2>
        A book is a gift you can <br /> open again and again
      </h2>
      <p style={{ margin: "1em 0" }}>-Garrison Keilor</p>
      <div className="buttons">
        <button className="btn btnOne">Claim Discount</button>
        <button className="btn btnTwo">Open Flash Sale</button>
      </div>
    </div>
  );
};

export default Jumbotron;
