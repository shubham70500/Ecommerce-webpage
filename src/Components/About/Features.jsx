import { Grid } from "@mui/material";
import React from "react";
import IconBox from "../Cards.js/IconBox";

const data = {
  features: [
    {
      iconUrl: "https://www.prava.co/105553334655168@3x.png",
      title: "Free Shipping",
      desc: "We deliver the product at your doorstep, at no extra charge.",
    },
    {
      iconUrl: "https://www.prava.co/105553334653920@3x.png",
      title: "Hassle-free Installation",
      desc: "We assemble the product and clear away the packaging, leaving you to enjoy the product.",
    },
    {
      iconUrl: "https://img.icons8.com/ultraviolet/512/star-half-empty.png",
      title: "The Prava Promise",
      desc: "See the product description to know about the warranty details.",
    },
  ],
};

const Features = () => {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {data.features.map((item, indx) => {
          return (
            <Grid md={4}>
              <IconBox
                iconUrl={item.iconUrl}
                heading={item.title}
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

export default Features;
