import { Grid } from "@mui/material";
import React from "react";
import FlipBox from "../Cards.js/FlipBox";

const data = {
  our_values: [
    {
      front: {
        title: "Freedom",
        stitle: "Evolve",
        logourl: "https://www.prava.co/card1@3x.png",
        desc: "We buy back your Prava furniture so you are free to evolve as your tastes change.",
        color: "rgb(227, 237, 227)",
      },
      back: {
        logourl: "https://www.prava.co/card1_top@3x.png",
        desc: "When you buy Prava furniture, it comes with an assurance that when the time comes you can give it back to us in exchange for credits. You can use these credits to get discounts on new products from our bespoke annual collections, to build your dream home that keeps pace with your evolving dreams and tastes. This freedom to transform your living spaces in tandem with your personal evolution, is the core essence of Prava.",
        title: "Freedom",
        stitle: "Evolve",
      },
    },
    {
      front: {
        title: "Responsibly",
        stitle: "Luxurious",
        logourl: "https://www.prava.co/card2@3x.png",
        desc: "We buy back your Prava furniture so you are free to evolve as your tastes change.",
        color: "rgb(213, 227, 233)",
      },
      back: {
        logourl: "https://www.prava.co/card2_top@3x.png",
        desc: "When you buy Prava furniture, it comes with an assurance that when the time comes you can give it back to us in exchange for credits. You can use these credits to get discounts on new products from our bespoke annual collections, to build your dream home that keeps pace with your evolving dreams and tastes. This freedom to transform your living spaces in tandem with your personal evolution, is the core essence of Prava.",
        title: "Responsibly",
        stitle: "Luxurious",
      },
    },
    {
      front: {
        title: "Annual",
        stitle: "Collections",
        logourl: "https://www.prava.co/card3@3x.png",
        desc: "We buy back your Prava furniture so you are free to evolve as your tastes change.",
        color: "rgb(215, 221, 229)",
      },
      back: {
        logourl: "https://www.prava.co/card3_top@3x.png",
        desc: "When you buy Prava furniture, it comes with an assurance that when the time comes you can give it back to us in exchange for credits. You can use these credits to get discounts on new products from our bespoke annual collections, to build your dream home that keeps pace with your evolving dreams and tastes. This freedom to transform your living spaces in tandem with your personal evolution, is the core essence of Prava.",
        title: "Annual",
        stitle: "Collections",
      },
    },
  ],
};

const OurValuesSection = () => {
  return (
    <div>
      <div
        className="discount-percentage org"
        style={{ textAlign: "center", marginBottom: "-30px" }}
      >
        OUR BELIEF
      </div>
      <h2 className="main-heading" style={{ textAlign: "center" }}>
        {"Freedom & Flow"}
      </h2>
      <Grid container spacing={2}>
        {data.our_values.map((item, index) => {
          return (
            <Grid md={4}>
              <div className="p-60px">
                <FlipBox data={item} />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OurValuesSection;
