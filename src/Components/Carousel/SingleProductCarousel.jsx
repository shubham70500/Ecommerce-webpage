import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";

const data = {
  id: "sofa1122",
  images: [
    "https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PREGLRSOF4/gallery_1.png",
    "https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PREGLRSOF4/gallery_3.png",
    "https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PREGLRSOF4/gallery_2.jpg",
    "https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PREGLRSOF4/gallery_4.png",
    "https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PREGLRSOF4/gallery_3.png",
    "https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PREGLRSOF4/gallery_2.png",
  ],
  title: "",
};

export default class SingleProductCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: (
        <div>
          <div className="next-slick-arrow"> ⫸ </div>
        </div>
      ),
      prevArrow: (
        <div
          style={{
            display: "block !important",
            background: "green",
            color: "white",
          }}
        >
          <div className="prev-slick-arrow"> ⫷ </div>
        </div>
      ),
    };

    return (
      <div>
        <Slider {...settings}>
          {data.images.map((url, index) => {
            return (
              <div key={index} className="container-singleproduct-image">
                <div
                  className="wrapper-singleproduct-image"
                  onClick={() =>
                    this.setState({ isOpen: true, photoIndex: index })
                  }
                >
                  <img
                    className="singleproduct-image"
                    src={`${url}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt="error"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </Slider>

        {isOpen && (
          <Lightbox
            mainSrc={data.images[photoIndex]}
            srcSet={data.images[photoIndex]}
            nextSrc={data.images[(photoIndex + 1) % data.images.length]}
            prevSrc={
              data.images[
                (photoIndex + data.images.length - 1) % data.images.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + data.images.length - 1) % data.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % data.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

// export default SingleProductCarousel
