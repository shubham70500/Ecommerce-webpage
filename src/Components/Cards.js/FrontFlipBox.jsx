import React from "react";
import "./Cards.css";

const FrontFlipBox = ({ imgUrl, title, subtitle, desc, color }) => {
  return (
    <>
      {" "}
      <div
        className="v-flex centre-m-flex"
        style={{ backgroundColor: `${color}`, height: "512px" }}
      >
        <img
          src={imgUrl}
          srcSet={imgUrl}
          alt=""
          className="img-logo-flip-front"
        />
        <div style={{ height: "40px" }} />
        <h2 className="main-heading no-m-p">{title}</h2>
        <p style={{ color: "#063D58", fontSize: "24px", margin: "0" }}>
          {subtitle}
        </p>

        <div style={{ height: "40px" }} />

        <p
          className="check-delivery-title "
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          {desc}
        </p>
      </div>
    </>
  );
};

export default FrontFlipBox;
