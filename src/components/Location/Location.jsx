import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="location">
      <div className="locations">
        <h4>Location</h4>
        <div className="check-item">
          <input type="checkbox" value={"hello"} />
          <label>Yogyakarta</label>
        </div>
        <div className="check-item">
          <input type="checkbox" value={"hello"} />
          <label>Jakrta</label>
        </div>
        <div className="check-item">
          <input type="checkbox" value={"hello"} />
          <label>Semarang</label>
        </div>
        <div className="check-item">
          <input type="checkbox" value={"hello"} />
          <label>Palembang</label>
        </div>
      </div>
    </div>
  );
};

export default Location;
