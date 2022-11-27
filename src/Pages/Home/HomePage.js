import { Grid } from "@mui/material";
import React from "react";
import AboutWithPriceCard from "../../Components/About/AboutWithPriceCard";
import Features from "../../Components/About/Features";
import RelatedProdSection from "../../Components/DetailSection/RelatedProdSection";
import CollapsibleSimpleAccordation from "../../Components/Accordations/CollapsibleSimpleAccordation";
import SubscriptionCard from "../../Components/Cards.js/SubscriptionCard";
import SingleProductCarousel from "../../Components/Carousel/SingleProductCarousel";
import Details from "../../Components/DetailSection/Details";
import SpecificationsSection from "../../Components/DetailSection/SpecificationsSection";
import BackButton from "../../Components/navigationHeader/BackButton";
import "./HomePage.css";
import OurValuesSection from "../../Components/DetailSection/OurValuesSection";

const HomePage = () => {
  return (
    <div className="pagecontainer">
      {/* <NavHeader /> */}
      <BackButton title="Back to Product" />
      <SingleProductCarousel />
      <div className="wrapper">
        <AboutWithPriceCard />
      </div>

      <div className="wrapper">
        <Details />
      </div>

      <div className="wrapper">
        <Grid container spacing={2}>
          <Grid md={6}>
            <SpecificationsSection />
          </Grid>
          <Grid md={6}>
            <CollapsibleSimpleAccordation title={"More Details"} />
          </Grid>
        </Grid>
      </div>

      <div className="wrapper">
        <SubscriptionCard />
      </div>

      <div className="wrapper">
        <Features />
      </div>

      <div className="wrapper">
        <RelatedProdSection
          title={"Other Sofas to consider"}
          subtitle={"MORE OPTIONS"}
        />
      </div>

      <div className="wrapper">
        <RelatedProdSection title={"Other Eclectic Glamour Products"} />
      </div>

      <div className="wrapper">
        <OurValuesSection />
      </div>
    </div>
  );
};

export default HomePage;
