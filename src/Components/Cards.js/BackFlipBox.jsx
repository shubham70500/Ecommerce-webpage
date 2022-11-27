import React from "react";

const BackFlipBox = ({ imgUrl, title, subtitle, desc }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "512px",
        margin: "30px !important",
        flexDirection: "column",
        padding: "0px 40px 80px 40px",
        borderRadius: "40px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        textAlign: "center",
      }}
    >
      <img
        src={imgUrl}
        srcSet={imgUrl}
        alt=""
        className="img-logo-flip-front neg-100-m"
      />

      <div style={{ height: "40px" }} />
      <h2 className="main-heading no-m-p">{title}</h2>
      <p style={{ color: "#063D58", fontSize: "24px", margin: "0" }}>
        {subtitle}
      </p>
      <div style={{ height: "40px" }} />
      <p className="desc-icon-box" style={{ fontFamily: "roboto" }}>
        {desc}
      </p>
    </div>
  );
};

export default BackFlipBox;
