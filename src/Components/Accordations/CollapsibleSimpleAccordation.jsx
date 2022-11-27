import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import './Accordation.css'

const data = {
  "more-details": [
    {
      heading: "Warranty Information",
      desc: "Manufacturer's Warranty for 2 Year against manufacturing defects.",
    },
    {
      heading: "Installation Information",
      desc: "Installation shall be arranged by PRAVA within 2 working days from the date of delivery. Please don't open the box(es) by yourself.",
    },
    {
      heading: "Freedome Circle",
      desc: "Product Eligible for buyback under Prava Freedom Circle. Please refer T&Cs for more details.",
    },
    {
      heading: "Disclaimer",
      desc: "Product Eligible for buyback under Prava Freedom Circle. Please refer T&Cs for more details.",
    },
    {
      heading: "Return Policy",
      desc: "If you receive a damaged or defective Product, or a Product that does not comply with the specifications as per your original order, you can return the Product within 2 days post delivery or post installation, as the case may be. Kindly refer T&Cs for more details.",
    },
  ],
};

const CollapsibleSimpleAccordation = ({title}) => {
  return (
    <div>
        <h2 className='main-heading'>{title}</h2>
        <div style={{height: "20px"}}></div>
      {data["more-details"].map((item, index) => {
        return (
          <Accordion>
            <AccordionSummary className="moreinfo-heading" expandIcon={<AddIcon color="info" />}>
              {item.heading}
            </AccordionSummary>
            <AccordionDetails>{item.desc}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CollapsibleSimpleAccordation;
