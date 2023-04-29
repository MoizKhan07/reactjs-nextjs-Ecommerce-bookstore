import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faCartShopping,
  faCommentDots,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import profile from "./blackjack.jpg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="current-location">
        <p>
          <span style={{ color: "grey" }}>Sent to</span>
          <i className="arrow down"></i>
        </p>
        <p style={{ marginTop: ".5em", marginRight: "4em" }}>
          <FontAwesomeIcon icon={faLocationDot} />{" "}
          <span style={{ fontWeight: "bold" }}>Yogyakarta 55283</span>
        </p>
      </div>
      <div className="searchbar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Find the best selling book of 2022..."
        />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faCartShopping} className="icon-item" />
        <FontAwesomeIcon icon={faCommentDots} className="icon-item" />
        <FontAwesomeIcon icon={faBell} className="icon-item" />
      </div>
      <div className="profile">
        <img src={profile} />
        <p>
          <i className="arrow down"></i>
        </p>
      </div>
    </div>
  );
};

export default Nav;
