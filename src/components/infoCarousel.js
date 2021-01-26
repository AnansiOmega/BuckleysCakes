import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

// const items = [
//   {
//     src: require("../assets/img/pics/wedding-cake.jpeg"),
//     altText: "",
//     caption: "",
//     header: "",
//   },
//   {
//     src: require("../assets/img/pics/salted-cara-cupcake.jpeg"),
//     altText: "",
//     caption: "",
//     header: ""
//   },
//   {
//     src: require("../assets/img/pics/choco-bday-cake.jpg"),
//     altText: "",
//     caption: "",
//     header: ""
//   },
//   {
//     src: require("../assets/img/pics/rose-cupcakes.jpeg"),
//     altText: "",
//     caption: "",
//     header: ""
//   },
// ];

export const InfoCarousel = ({photos}) => {

  const createItems = () => {
    return photos.map(photo => {
      return{
        src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`,
        altText: photo.title,
        caption: '',
        header: ''
      }
    })
  }

  createItems()
    return (
      <>
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-primary">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                {/* <h1 className="text-white font-weight-light hachi">
                  Buckley's Cakes
                </h1> */}
                <p className="lead text-white mt-4">
                First things first, thanks for being a fan!
                This is my small business located in Lockport Il, all hand-made product, and all made with lots of love!
                Please visit the Contact us page for ways you can get in touch. Also, please be aware, cake is serious talk, and requires a lot of communication!
                </p>
                <p className="text-white">
                - Lauren (Buckley) Shepherd
                </p>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={createItems()}/>
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-pink" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
}
