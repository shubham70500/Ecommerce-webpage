import React from "react";
import "./Cards.css";

const IconBox = ({ iconUrl, heading, desc }) => {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={iconUrl}
        srcSet={iconUrl}
        alt={heading}
        className="align-centre-image"
        width={50}
        height={50}
      />
      <p className="title-icon-box">{heading}</p>
      <p className="desc-icon-box max-w-200">{desc}</p>
    </div>
  );
};

export default IconBox;
