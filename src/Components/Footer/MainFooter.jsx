import { Grid, IconButton } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";

const popularsearches = [
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Ruby Brown bedroom", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Ruby Brown bedroom", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Ruby Brown bedroom", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Ruby Brown bedroom", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Ruby Brown bedroom", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho bedroom", url: "/" },
  { text: "Ruby Boho Setup", url: "/" },
  { text: "Boho Red bedroom", url: "/" },
  { text: "Ruby Brown bedroom", url: "/" },
];

const MainFooter = () => {
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src="https://www.prava.co/footer-vector/vc_footer.svg"
        srcSet="https://www.prava.co/footer-vector/vc_footer.svg"
        alt=""
      />

      <div
        style={{
          backgroundColor: "#C9D2DE",
          width: "100%",
          display: "block",
          marginTop: "-10px",
          padding: "60px",
        }}
      >
        <div className="pagecontainer">
          <Grid container spacing={2}>
            <Grid sm={8} md={6}>
              <p className="title-icon-box" style={{ textAlign: "left" }}>
                Experience Center :
              </p>
              <p className="desc-icon-box" style={{ textAlign: "left" }}>
                Prava, 1st Floor, Krishna Annex, near Silk Board Junction,
                Sector 6, HSR Layout, Bengaluru, Karnataka 560068
              </p>
              <div style={{ display: "flex" }}>
                <div>
                  <a
                    href="tel:99999999"
                    style={{
                      display: "flex",
                      alignItem: "centre",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}
                  >
                    <CallIcon className="red-icon" />
                    {"  "}
                    080 - 69228888
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:mm@mm.cc"
                    style={{
                      display: "flex",
                      alignItem: "centre",
                      fontSize: "14px",
                      marginRight: "10px",
                    }}
                  >
                    <AlternateEmailIcon className="blue-icon" />
                    {"  "}
                    Care@gmail.com
                  </a>
                </div>
              </div>
              <div style={{ height: "60px" }} />
              <MenuFooter />
            </Grid>

            <Grid
              sm={4}
              md={6}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <span>
                <h2
                  className="no-m-p"
                  style={{
                    textAlign: "end",
                    color: "#668ea9",
                    fontFamily: "Philosopher",
                    fontSize: "35px",
                    textTransform: "uppercase",
                  }}
                >
                  TrescoLife
                </h2>
                <h2
                  className="no-m-p"
                  style={{
                    textAlign: "end",
                    color: "#063d58",
                    fontFamily: "Philosopher",
                    fontSize: "28px",
                    textTransform: "uppercase",
                  }}
                >
                  Freedom & Flow
                </h2>
              </span>

              <span style={{ textAlign: "end" }}>
                <p className="title-icon-box" style={{ textAlign: "right" }}>
                  Follow us on :
                </p>
                <IconButton style={{ background: "#063D58" }}>
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </span>
            </Grid>
          </Grid>
          <div style={{ height: "30px" }} />
          <p className="title-icon-box" style={{ textAlign: "left" }}>
            Popular Searches :
          </p>

          {popularsearches.map((item, indx) => {
            return (
              <a href={item.url}>
                <TextChip text={item.text} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MenuFooter = () => {
  const menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    {
      name: "Terms",
      url: "/",
    },
  ];
  return (
    <div>
      {menu.map((item, indx) => {
        return (
          <div style={{ display: "inline-block", padding: "10px" }}>
            <a
              className={
                indx === 0 ? "title-small f-18" : "title-small b-l f-18"
              }
              href={item.url}
            >
              {item.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

const TextChip = ({ text }) => {
  return <p className="text-chip">{text}</p>;
};

export default MainFooter;
