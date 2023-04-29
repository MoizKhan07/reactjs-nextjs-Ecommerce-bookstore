import React, { useState } from "react";
import "./price.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
const Price = () => {
  const [hidePrice, setHidePrice] = useState(true);
  return (
    <div className="price">
      <p>
        <FontAwesomeIcon icon={faTag} />
        <span></span> Price <span></span>{" "}
        <i
          className="arrow down"
          onClick={() => {
            setHidePrice(!hidePrice);
          }}
        ></i>
      </p>
      <div style={hidePrice ? { display: "none" } : { display: "block" }}>
        <button>Rp200 rb - Rp900 rb</button>
        <button>Rp900 rb - Rp3.5 gt</button>
      </div>
    </div>
  );
};

export default Price;
