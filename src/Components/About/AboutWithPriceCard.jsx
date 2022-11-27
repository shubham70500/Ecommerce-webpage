import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SingleAboutProduct from "./SingleAboutProduct";
import PriceNameCard from "../Cards.js/PriceNameCard";

const AboutWithPriceCard = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid md={6}>
          <SingleAboutProduct style={{ marginRight: "80px" }} />
        </Grid>
        <Grid md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-130px",
              position: "relative",
            }}
            className={"mobile-no-m-p"}
          >
            <PriceNameCard />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutWithPriceCard;
