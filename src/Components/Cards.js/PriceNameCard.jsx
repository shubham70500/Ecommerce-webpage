import React from "react";
import "./Cards.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";

const PriceNameCard = () => {
  return (
    <div>
      <Box
        sx={{
          maxWidth: 480,
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "20px 30px",
            borderRadius: "16px",
            zIndex: "2",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px !important",
          }}
        >
          <h2 className="title-card">
            Eclectic Glamour L-Shape Sofa (2-Seater + Right Aligned Lounger)
          </h2>
          <div style={{ height: "10px" }} />
          <div style={{ display: "flex" }}>
            <div className="price-discounted">₹ 1,08,999</div>
            <div className="price-mrp">₹ 1,14,856</div>
          </div>
          <div className="discount-percentage">5% off</div>
          <div style={{ height: "10px" }} />
          <div className="check-delivery-title">Check delivery</div>
          <div
            style={{ display: "flex", justifycontent: "space-between" }}
            className="mobile-view-flex"
          >
            <TextField
              error={true}
              id="enter-pin-code"
              label="Enter PinCode"
              variant="standard"
            />
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
            <Button style={{ marginLeft: "6px" }} className="button-filled">
              Add to Cart
            </Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default PriceNameCard;
