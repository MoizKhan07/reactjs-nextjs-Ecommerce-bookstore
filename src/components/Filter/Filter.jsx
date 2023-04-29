import React, { useState } from "react";
import Styles from "./filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  const [hideCategory, setHideCategory] = useState(true);
  return (
    <div className={Styles.filter}>
      <div>
        <p className={Styles.first}>
          Bookies <span></span>
          <i className={[Styles.arrow, Styles.right].join(" ")}></i>
          <span></span>
          Flash Sale Book
        </p>
      </div>
      <p className={Styles.icon}>
        <FontAwesomeIcon icon={faSliders} /> <span></span> Filter <span></span>{" "}
        <i
          className={[Styles.arrow, Styles.down].join(" ")}
          onClick={() => {
            setHideCategory(!hideCategory);
          }}
        ></i>
      </p>
      <div
        className={Styles.categories}
        style={hideCategory ? { display: "none" } : { display: "block" }}
      >
        <h4>Category</h4>
        <div className={Styles["check-item"]}>
          <input type="checkbox" />
          <label>Adventure</label>
        </div>
        <div className={Styles["check-item"]}>
          <input type="checkbox" />
          <label>Fantasy</label>
        </div>
        <div className={Styles["check-item"]}>
          <input type="checkbox" />
          <label>Science Fiction</label>
        </div>
        <div className={Styles["check-item"]}>
          <input type="checkbox" />
          <label>Romance</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
