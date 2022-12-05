import { Grid } from "@mui/material";
import React from "react";
import DetailCardWithImageMagnifier from "../Cards.js/DetailCardWithImageMagnifier";
const data = {
  details: [
    {
      url: "https://res.cloudinary.com/tsukuyomi/image/upload/prd/materials/material_49.png",
      heading: "Brass Finish Steel",
      desc: "Mild Steel, electroplated in a Brass finish.",
    },
    {
      url: "https://res.cloudinary.com/tsukuyomi/image/upload/prd/materials/material_23.png",
      heading: "Blue Opal Velvet Fabric",
      desc: "Blue Opal is Jewel color in woven cut pile velvet finish. It is soft and Shiny also know as Velour fabric",
    },
  ],
};

const Details = () => {
  return (
    <div>
      <h2 className="main-heading" style={{ textAlign: "center" }}>
        Deatils
      </h2>
      <div style={{ height: "40px" }}></div>
      <Grid container spacing={2}>
        {data.details.map((item, indx) => {
          return (
            <Grid key={indx} md={6}>
              <DetailCardWithImageMagnifier
                url={item.url}
                heading={item.heading}
                desc={item.desc}
              />
              <div style={{ height: "20px" }}></div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Details;
