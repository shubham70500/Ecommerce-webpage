import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import BackFlipBox from "./BackFlipBox";
import FrontFlipBox from "./FrontFlipBox";

const FlipBox = ({ data }) => {
  const [isFlip, setIsFlip] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsFlip(true);
      }}
      onMouseLeave={() => {
        setIsFlip(false);
      }}
    >
      <ReactCardFlip isFlipped={isFlip}>
        <FrontFlipBox
          imgUrl={data.front.logourl}
          title={data.front.title}
          subtitle={data.front.stitle}
          desc={data.front.desc}
          color={data.front.color}
        />
        <BackFlipBox
          imgUrl={data.back.logourl}
          title={data.back.title}
          subtitle={data.back.stitle}
          desc={data.back.desc}
        />
      </ReactCardFlip>
    </div>
  );
};

export default FlipBox;
