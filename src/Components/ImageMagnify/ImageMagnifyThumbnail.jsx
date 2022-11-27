import React from "react";
import ReactImageMagnify from "react-image-magnify";
import "./ImageMagnify.css";

const ImageMagnifyThumbnail = ({ url }) => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            width: 80,
            height: 80,
            src: url,
          },
          imageClassName: "small-magnify-thumbnail",
          className: "root-magnifier",
          enlargedImageContainerClassName: "magnified-container",
          largeImage: {
            src: url,
            width: 600,
            height: 600,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
            width: "200px !important",
            height: "200px !imp0rtant",
            borderRadius: "200px",
          },
          enlargedImageContainerDimensions: {
            width: "300%",
            height: "300%",
          },
        }}
      />
    </div>
  );
};

export default ImageMagnifyThumbnail;
